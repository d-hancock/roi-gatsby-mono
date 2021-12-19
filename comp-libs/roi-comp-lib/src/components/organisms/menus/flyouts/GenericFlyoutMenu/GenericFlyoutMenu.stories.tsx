import React from "react"
import GenericFlyoutMenu from "./GenericFlyoutMenu"
import { Popover } from "@headlessui/react"

export default {
  title: "Components/Menus/Flyouts/GenericFlyoutMenu",
  component: GenericFlyoutMenu,
  description: "Generic flyout menu component.",
}


// create a template of how args map to rendering
const Template = (args) => {
  return (
    <Popover>
      {({ open = args.open }) => (
        <>
          <Popover.Button>Open</Popover.Button>
          {open && (
            <GenericFlyoutMenu staticProp={true} {...args} />
          )}
        </>
      )}

    </Popover>
  )
}


Template.args = {
  test: "hi", //  TODO assign real value here
  open: true,

}

export const generic_flyout_menu = Template.bind({})
generic_flyout_menu.args = {
  ...Template.args,
}
