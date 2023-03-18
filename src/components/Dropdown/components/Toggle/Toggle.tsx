import React, { FC } from "react";
import { useDropdownContext } from "../../context/dropdownContext";
import { ToggleWrapper } from "./Toggle.style";

export type ToggleProps = {
  children?: React.ReactNode;
};

export const Toggle: FC<ToggleProps> = ({ children }) => {
  const { toggle, setToggleElementRef } = useDropdownContext();
  return (
    <ToggleWrapper onClick={toggle} ref={setToggleElementRef}>
      {children}
    </ToggleWrapper>
  );
};
