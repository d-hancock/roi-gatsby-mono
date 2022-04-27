import React from "react"
import GenericNavFlyoutMenuPanel from "./GenericNavFlyoutMenuPanel"
import { Popover, Transition } from "@headlessui/react"
import tw from "twin.macro"
import { ChevronDownIcon } from "@heroicons/react/solid"

export default {
  title: "Components/Generics/Menus/Flyouts/GenericNavFlyoutMenuPanel",
  component: GenericNavFlyoutMenuPanel,
  description: "Generic nav flyout menu panel component.",
}


// create a template of how args map to rendering
const Template = (args) => (
  <Popover tw="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className="group"
          css={[
            open ? tw`text-gray-900` : tw`text-gray-500`,
            tw`bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
          ]}
        >
          <span>Test Button</span>
          <ChevronDownIcon
            css={[
              open ? tw`text-gray-600` : tw`text-gray-400`,
              tw`ml-2 h-5 w-5 group-hover:text-gray-500`,
            ]}
            aria-hidden="true"
          />
        </Popover.Button>
        {/* @ts-ignore*/}
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel tw="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">

            <GenericNavFlyoutMenuPanel {...args} />
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)
Template.args = {
  test: "hi", //  TODO assign real value here
}

export const generic_nav_flyout_menu_panel = Template.bind({})
generic_nav_flyout_menu_panel.args = {
  ...Template.args,
}
