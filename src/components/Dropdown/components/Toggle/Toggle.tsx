import React, { FC } from "react";
import { useDropdownContext } from "../../context/dropdownContext";

export type ToggleProps = {
  children?: React.ReactNode;
};

export const Toggle: FC<ToggleProps> = ({ children }) => {
  const { toggle, setToggleElementRef } = useDropdownContext();

  return (
    <div onClick={toggle} ref={setToggleElementRef}>
      {children}
    </div>
  );
};
