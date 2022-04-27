import React from 'react';
import GenericMenuItemList from "./GenericMenuItemList";
import {
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from "@heroicons/react/outline"

export default {
    title: "Components/Generics/Menus/GenericMenuItemList",
    component: GenericMenuItemList,
    description: "Generic menu item list component.",
};

const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  { name: "Security", description: "Your customers' data will be safe and secure.", href: "#", icon: ShieldCheckIcon },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
]

// create a template of how args map to rendering
const Template = (args) => <GenericMenuItemList {...args} />;
Template.args = {
    itemListData: solutions
};

export const generic_menu_item_list = Template.bind({});
generic_menu_item_list.args = {
    ...Template.args,
};
