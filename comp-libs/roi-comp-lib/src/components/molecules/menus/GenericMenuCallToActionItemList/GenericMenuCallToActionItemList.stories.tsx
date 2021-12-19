import React from "react"
import GenericMenuCallToActionItemList from "./GenericMenuCallToActionItemList"
import { PhoneIcon, PlayIcon } from "@heroicons/react/outline"

const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
]


export default {
  title: "Components/Menus/GenericMenuCallToActionItemList",
  component: GenericMenuCallToActionItemList,
  description: "Generic menu call to action component.",
}


// create a template of how args map to rendering
const Template = (args) => <GenericMenuCallToActionItemList {...args} />
Template.args = {
  menuCtaData: callsToAction,
}

export const generic_menu_call_to_action = Template.bind({})
generic_menu_call_to_action.args = {
  ...Template.args,
}
