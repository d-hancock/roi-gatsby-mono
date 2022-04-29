import React from "react"
import GenericNavFlyoutMenu from "./GenericNavFlyoutMenu"
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
  title: "Components/Generics/Menus/Flyouts/GenericNavFlyoutMenu",
  component: GenericNavFlyoutMenu,
  description: "Generic nav flyout menu component.",
}

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
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
]

// create a template of how args map to rendering
const Template = (args) => <GenericNavFlyoutMenu {...args} />
Template.args = {
  buttonLabel: "Test Button Label",
  menuListData: solutions,
  ctaListData: callsToAction,
}

export const generic_nav_flyout_menu = Template.bind({})
generic_nav_flyout_menu.args = {
  ...Template.args,
}
