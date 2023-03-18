import { VariationPlacement } from "@popperjs/core";
import { FC } from "react";
import { ToggleProps } from "./components/Toggle";
import { MenuProps } from "./components/Menu/Menu";
import { MenuItemProps } from "./components/MenuItem/MenuItem";

export type DropdownSubComponents = {
  Toggle: FC<ToggleProps>;
  Menu: FC<MenuProps>;
  MenuItem: FC<MenuItemProps>;
};

export type DropdownProps = {
  children?: React.ReactNode;
  placement?: VariationPlacement;
};
