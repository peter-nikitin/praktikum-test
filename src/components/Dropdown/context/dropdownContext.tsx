import { createContext, useContext } from "react";

type Placement = {
  styles: Record<string, React.CSSProperties>;
  attributes: Record<string, string | any | undefined>;
};

export type DropdownContextValueType = {
  isOpen: boolean;
  toggle: () => void;
  setToggleElementRef?: (element: Element | null) => void;
  setMenuElementRef?: (element: HTMLElement | null) => void;
  placement?: Placement;
};

export const dropdownContextValue = {
  isOpen: false,
  toggle: () => {},
};

export const DropdownContext =
  createContext<DropdownContextValueType>(dropdownContextValue);

export const useDropdownContext = () => useContext(DropdownContext);
