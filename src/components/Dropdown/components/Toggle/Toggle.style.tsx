import styled from "styled-components";
import { COLOR, FONT, SIZE, SPACING } from "../../../../theme";

export const ToggleWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: ${COLOR.ACCENT.BACKGROUND.basic};
  padding: ${SPACING.XS} ${SPACING.XS};
  cursor: pointer;
  border-radius: ${SIZE.BORDER_DARIUS};
  color: ${COLOR.ACCENT.COLOR.basic};
  font-size: ${FONT.SIZE.M};

  &:hover {
    background-color: ${COLOR.ACCENT.BACKGROUND.hover};
  }

  &:active {
    background-color: ${COLOR.ACCENT.BACKGROUND.active};
  }
`;
