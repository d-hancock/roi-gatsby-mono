import React from 'react';
import GenericFlyoutMenuFooterSection from "./GenericFlyoutMenuFooterSection";

export default {
    title: "Components/Generics/Menus/Flyouts/GenericFlyoutMenuFooterSection",
    component: GenericFlyoutMenuFooterSection,
    description: "Generic flyout menu footer section component.",
};


// create a template of how args map to rendering
const Template = (args) => <GenericFlyoutMenuFooterSection {...args} />;
Template.args = {
    test : "hi" //  TODO assign real value here
};

export const generic_flyout_menu_footer_section = Template.bind({});
generic_flyout_menu_footer_section.args = {
    ...Template.args,
};
