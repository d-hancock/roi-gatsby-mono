import React from 'react';
import GenericMenuFooterList from "./GenericMenuFooterList";

export default {
    title: "Components/Generics/Menus/GenericMenuFooterList",
    component: GenericMenuFooterList,
    description: "Generic menu footer list component.",
};


// create a template of how args map to rendering
const Template = (args) => <GenericMenuFooterList {...args} />;
Template.args = {
    string : "hi" //  TODO assign real value here
};

export const generic_menu_footer_list = Template.bind({});
generic_menu_footer_list.args = {
    ...Template.args,
};
