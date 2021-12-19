import React from 'react';
import GenericFlyoutMenuMainSection from "./GenericFlyoutMenuMainSection";
import {
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from "@heroicons/react/outline"

export default {
    title: "Components/Menus/Flyouts/GenericFlyoutMenuMainSection",
    component: GenericFlyoutMenuMainSection,
    description: "Generic flyout menu main section component.",
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
const data = {
  sectionTitle: 'Test Title',
  sectionItemList: solutions,
}

// create a template of how args map to rendering
const Template = (args) => <GenericFlyoutMenuMainSection {...args} />;
Template.args = {
    sectionOneData: data //  TODO assign real value here
};

export const generic_flyout_menu_main_section = Template.bind({});
generic_flyout_menu_main_section.args = {
    ...Template.args,
};
