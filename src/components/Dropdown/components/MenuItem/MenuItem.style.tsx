import styled from "styled-components";
import { COLOR, SPACING } from "../../../../theme";

export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${SPACING.M} ${SPACING.S};
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.DEFAULT.BACKGROUND.hover};
  }
`;
