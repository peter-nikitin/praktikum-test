import React, { FC } from "react";
import { createPortal } from "react-dom";
import { usePortalContainer } from "../../../../hooks/usePortalContainer";
import { useDropdownContext } from "../../context/dropdownContext";
import { MenuWrapper } from "./Menu.style";

export type MenuProps = {
  children?: React.ReactNode;
};

export const Menu: FC<MenuProps> = ({ children }) => {
  const { dropdownMenuState, setMenuElementRef, placement } =
    useDropdownContext();
  const portalContainer = usePortalContainer();

  return (
    <>
      {dropdownMenuState === "opened" &&
        createPortal(
          <MenuWrapper
            ref={setMenuElementRef}
            style={placement?.styles.popper}
            {...placement?.attributes.popper}
          >
            {children}
          </MenuWrapper>,
          portalContainer
        )}
    </>
  );
};
