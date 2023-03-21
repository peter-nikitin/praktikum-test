import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { Edit, MoreVertical } from "react-feather";
import { COLOR, FONT, SIZE, SPACING } from "../theme";
import styled from "styled-components";

export default {
  component: Dropdown,
  title: "Dropdown",
  args: {
    placement: "bottom-end",
  },
} as ComponentMeta<typeof Dropdown>;

const TopLeft = styled.div`
  position: absolute;
  top: ${SPACING.M};
  left: ${SPACING.M};
`;
const BottomLeft = styled.div`
  position: absolute;
  bottom: ${SPACING.M};
  left: ${SPACING.M};
`;
const TopRight = styled.div`
  position: absolute;
  top: ${SPACING.M};
  right: ${SPACING.M};
`;
const BottomRight = styled.div`
  position: absolute;
  bottom: ${SPACING.M};
  right: ${SPACING.M};
`;

const ToggleButton = styled.button`
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

const menuItems = [
  {
    text: "My text",
    icon: <Edit />,
  },
  {
    text: "Edit",
    icon: <Edit />,
  },
  {
    text: "Hi, my name is Peter! Yaauaupp",
    icon: <Edit />,
  },
];

const Wrapper = styled.div`
  height: 200vh;
`;

const DropdownExample = () => (
  <Dropdown>
    <Dropdown.Toggle>
      <ToggleButton>
        {" "}
        <MoreVertical size={FONT.SIZE.L} />
      </ToggleButton>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {menuItems.map((item) => (
        <Dropdown.MenuItem
          key={item.text}
          text={item.text}
          icon={item.icon}
          onClick={() => {
            console.log(`click on ${item.text}`);
          }}
        />
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Wrapper>
    <TopLeft>
      <DropdownExample />
    </TopLeft>
    <BottomLeft>
      <DropdownExample />
    </BottomLeft>
    <TopRight>
      <DropdownExample />
    </TopRight>
    <BottomRight>
      <DropdownExample />
    </BottomRight>
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};
