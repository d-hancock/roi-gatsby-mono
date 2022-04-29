import React from 'react';
import HeaderBase from "./HeaderBase";

export default {
    title: "Components/HeaderBase",
    component: HeaderBase,
    description: "The basic header component.",
};


// create a template of how args map to rendering
const Template = (args) => <HeaderBase {...args} />;
Template.args = {
    variant : "hi",
    scrollBehavior: 'hide'
    //  required  TODO assign real value here
};

export const header_base = Template.bind({});
header_base.args = {
    ...Template.args,
};
