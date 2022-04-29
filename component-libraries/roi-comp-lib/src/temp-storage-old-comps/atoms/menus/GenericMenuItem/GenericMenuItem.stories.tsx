import React from "react"
import GenericMenuItem from "./GenericMenuItem"
import { ShieldCheckIcon } from "@heroicons/react/outline"

export default {
  title: "Components/Generics/Menus/GenericMenuItem",
  component: GenericMenuItem,
  description: "Generic menu item component.",
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

