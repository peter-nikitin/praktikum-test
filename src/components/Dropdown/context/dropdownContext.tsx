import { createContext, useContext } from "react";
import { DropdownMenuStateType } from "../Dropdown";

type Placement = {
  styles: Record<string, React.CSSProperties>;
  attributes: Record<string, string | any | undefined>;
};

export type DropdownContextValueType = {
  dropdownMenuState: DropdownMenuStateType;
  toggle: () => void;
  setToggleElementRef?: (element: Element | null) => void;
  setMenuElementRef?: (element: HTMLElement | null) => void;
  placement?: Placement;
};

export const dropdownContextValue = {
  dropdownMenuState: "closed",
  toggle: () => {},
} as const;

export const DropdownContext =
  createContext<DropdownContextValueType>(dropdownContextValue);

export const useDropdownContext = () => useContext(DropdownContext);
