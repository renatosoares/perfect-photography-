import React from "react";

import { Header } from "./Header";

const HeaderStory = {
  title: "Example/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export default HeaderStory;
