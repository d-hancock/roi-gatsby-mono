import React from "react"
import GenericMenuItem from "./GenericMenuItem"
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
  title: "Components/Generics/Menus/GenericMenuItem",
  component: GenericMenuItem,
  description: "Generic menu item component.",
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: [
          "CHARTBARICON",
          "CURSORCLICKICON",
          "PHONEICON",
          "PLAYICON",
          "REFRESHICON",
          "SHIELDCHECKICON",
          "VIEWGRIDICON",
        ],
        mappings: {
          CHARTBARICON: ChartBarIcon,
          CURSORCLICKICON: CursorClickIcon,
          PHONEICON: PhoneIcon,
          PLAYICON: PlayIcon,
          REFRESHICON: RefreshIcon,
          SHIELDCHECKICON: ShieldCheckIcon,
          VIEWGRIDICON: ViewGridIcon,
        },
      },
    },
  },
}



// create a template of how args map to rendering
const Template = (args) => (
  <GenericMenuItem {...args} />
)
Template.args = {
  name: "Item Name",
  description: "Item description sentence",
  href: "#",
  icon: ShieldCheckIcon,
}


export const generic_menu_item = Template.bind({})


generic_menu_item.args = {
  ...Template.args,
}

