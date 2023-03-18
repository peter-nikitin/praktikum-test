import React, { FC, useCallback, useMemo, useState } from "react";
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

declare global {
  interface Window {
    hideOpenedDropdown: () => void;
  }
}

export const DropdownWrapper: FC<DropdownProps> = ({ children, placement }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  const dropdownContextValue: DropdownContextValueType = useMemo(
    () => ({
      isOpen,
      toggle: handleDropdownToggle,
      setMenuElementRef,
      setToggleElementRef,
      placement: { styles, attributes },
    }),
    [
      isOpen,
      setIsOpen,
      setToggleElementRef,
      setMenuElementRef,
      handleDropdownToggle,
      styles,
      attributes,
    ]
  );

  useOnClickOutside([toggleElementRef, menuElementRef], () => {
    setIsOpen(false);
  });

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
