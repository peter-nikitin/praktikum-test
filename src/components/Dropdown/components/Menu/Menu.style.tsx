import styled from "styled-components";
import { COLOR, SIZE } from "../../../../theme";

export const MenuWrapper = styled.div`
  width: ${SIZE.WIDTH.DROPDOWN};
  border-radius: ${SIZE.BORDER_DARIUS};
  overflow: hidden;
  background-color: ${COLOR.DEFAULT.BACKGROUND.basic};
  box-shadow: 0 3px 10px ${COLOR.DEFAULT.SHADOW.light};
`;
