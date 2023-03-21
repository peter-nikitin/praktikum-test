import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Toggle } from "./components/Toggle/Toggle";
import { Menu } from "./components/Menu/Menu";
import { MenuItem } from "./components/MenuItem/MenuItem";
import {
  DropdownContext,
  DropdownContextValueType,
} from "./context/dropdownContext";
import { DropdownProps, DropdownSubComponents } from "./types";
import { usePopper } from "react-popper";
import flip from "@popperjs/core/lib/modifiers/flip.js";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useIntersection } from "../../hooks/useIntersection";

declare global {
  interface Window {
    hideOpenedDropdown: () => void;
  }
}

export type DropdownMenuStateType = "closed" | "opened" | "hidden";

export const DropdownWrapper: FC<DropdownProps> = ({ children, placement }) => {
  const [dropdownMenuState, setDropdownMenuState] =
    useState<DropdownMenuStateType>("closed");

  const [toggleElementRef, setToggleElementRef] = useState<Element | null>(
    null
  );
  const [menuElementRef, setMenuElementRef] = useState<HTMLElement | null>(
    null
  );

  const { styles, attributes } = usePopper(toggleElementRef, menuElementRef, {
    placement,
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          padding: 15,
        },
      },
      {
        name: "eventListeners",
        options: {
          scroll: true,
          resize: true,
        },
      },
      flip,
    ],
  });

  const handleDropdownToggle = useCallback(() => {
    setDropdownMenuState((prevState) => {
      if (prevState === "hidden" || prevState === "opened") {
        return "closed";
      }
      return "opened";
    });
  }, [setDropdownMenuState]);

  const dropdownContextValue: DropdownContextValueType = useMemo(
    () => ({
      dropdownMenuState,
      toggle: handleDropdownToggle,
      setMenuElementRef,
      setToggleElementRef,
      placement: { styles, attributes },
    }),
    [
      dropdownMenuState,
      setDropdownMenuState,
      setToggleElementRef,
      setMenuElementRef,
      handleDropdownToggle,
      styles,
      attributes,
    ]
  );

  useOnClickOutside([toggleElementRef, menuElementRef], () => {
    setDropdownMenuState("closed");
  });

  const { isVisible } = useIntersection({ observingElement: toggleElementRef });

  useEffect(() => {
    if (!isVisible && dropdownMenuState === "opened") {
      setDropdownMenuState("hidden");
      return;
    }

    if (isVisible && dropdownMenuState === "hidden") {
      setDropdownMenuState("opened");
    }
  }, [setDropdownMenuState, dropdownMenuState, isVisible]);

  return (
    <DropdownContext.Provider value={dropdownContextValue}>
      {children}
    </DropdownContext.Provider>
  );
};

DropdownWrapper.displayName = "Dropdown";

export const Dropdown: FC<DropdownProps> & DropdownSubComponents =
  Object.assign(DropdownWrapper, {
    Toggle,
    Menu,
    MenuItem,
  });
