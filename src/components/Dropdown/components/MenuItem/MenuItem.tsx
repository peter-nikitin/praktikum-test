import React, { FC, useCallback } from "react";
import { useDropdownContext } from "../../context/dropdownContext";
import { MenuItemWrapper } from "./MenuItem.style";

export type MenuItemProps = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const MenuItem: FC<MenuItemProps> = ({ text, icon, onClick }) => {
  const { toggle } = useDropdownContext();

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
    toggle();
  }, [onClick, toggle]);

  return (
    <MenuItemWrapper onClick={handleClick}>
      {text}
      {icon}
    </MenuItemWrapper>
  );
};
