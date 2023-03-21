import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { Edit, MoreVertical } from "react-feather";
import { FONT, SPACING } from "../theme";
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
      <MoreVertical size={FONT.SIZE.L} />
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
