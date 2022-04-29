import React from 'react';
import GenericMenuCallToActionItem from "./GenericMenuCallToActionItem";
import { PhoneIcon } from "@heroicons/react/outline"

export default {
    title: "Components/Generics/Menus/GenericMenuCallToActionItem",
    component: GenericMenuCallToActionItem,
    description: "Generic menu call to action item component.",
};


// create a template of how args map to rendering
const Template = (args) => <GenericMenuCallToActionItem {...args} />;
Template.args = {
    name: 'Test CTA Name',
    href: '#',
    icon: PhoneIcon
};

export const generic_menu_call_to_action_item = Template.bind({});
generic_menu_call_to_action_item.args = {
    ...Template.args,
};
