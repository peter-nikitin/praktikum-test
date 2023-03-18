import React from "react";
import { Dropdown } from "../components/Dropdown/Dropdown";

export default {
  component: Dropdown,
  title: "Dropdown",
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};
