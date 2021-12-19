import React from "react"
import { GenericFlyoutMenuItem } from "./GenericFlyoutMenuItem"
import { ShieldCheckIcon } from "@heroicons/react/outline"

export default {
  title: "Components/Menus/Flyouts/GenericFlyoutMenuItem",
  component: GenericFlyoutMenuItem,
  description: "Generic flyout menu item component.",
}


// create a template of how args map to rendering
const Template = (args) => (
  <GenericFlyoutMenuItem {...args} />
)
Template.args = {
  name: "Item Name",
  description: "Item description sentence",
  href: "#",
  icon: ShieldCheckIcon,
}

export const generic_flyout_menu_item = Template.bind({})
generic_flyout_menu_item.args = {
  ...Template.args,
}
