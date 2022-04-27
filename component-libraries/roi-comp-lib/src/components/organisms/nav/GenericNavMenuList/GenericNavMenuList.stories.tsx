import React from 'react';
import GenericNavMenuList from "./GenericNavMenuList";

export default {
    title: "Components/Generics/Menus/GenericNavMenuList",
    component: GenericNavMenuList,
    description: "Generic nav menu list component.",
};


// create a template of how args map to rendering
const Template = (args) => <GenericNavMenuList {...args} />;
Template.args = {
    test : "hi" //  TODO assign real value here
};

export const generic_nav_menu_list = Template.bind({});
generic_nav_menu_list.args = {
    ...Template.args,
};
