import React from 'react';
import GenericDropDownMenu from "./GenericDropDownMenu";

export default {
    title: "Components/Generics/Menus/GenericDropDownMenu",
    component: GenericDropDownMenu,
    description: "Generic drop down menu component.",
};


// create a template of how args map to rendering
const Template = (args) => <GenericDropDownMenu {...args} />;
Template.args = {
    test : 'hi' //  TODO assign real value here
};

export const generic_drop_down_menu = Template.bind({});
generic_drop_down_menu.args = {
    ...Template.args,
};
