import * as React from "react"
import { Popover, Transition } from "@headlessui/react"
import tw from "twin.macro"
import { ChevronDownIcon } from "@heroicons/react/solid"
import {
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from "@heroicons/react/outline"
import GenericMenuItemList from "../../../../molecules/menus/GenericMenuItemList/GenericMenuItemList"
import GenericMenuCallToActionItemList
  from "../../../../molecules/menus/GenericMenuCallToActionItemList/GenericMenuCallToActionItemList"
import { GenericMenuItemProps } from "../../../../molecules/menus/GenericMenuItem/GenericMenuItem"
import { GenericMenuCallToActionItemProps } from "../../../../molecules/menus/GenericMenuCallToActionItem/GenericMenuCallToActionItem"

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

export interface GenericNavFlyoutMenuProps extends React.HTMLProps<HTMLDivElement> {
  buttonLabel: string,
  menuListData: GenericMenuItemProps[],
  ctaListData: GenericMenuCallToActionItemProps[],
  customBottomData?: any,
}

export const GenericNavFlyoutMenu = (props: GenericNavFlyoutMenuProps) => {
  const { buttonLabel, menuListData, ctaListData, customBottomData } = props
  return (
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
            <span>{buttonLabel}</span>
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
              <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <GenericMenuItemList itemListData={menuListData} />
                {ctaListData && (
                  <GenericMenuCallToActionItemList menuCtaData={ctaListData} />
                )}
                {customBottomData && (
                  <div />
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default GenericNavFlyoutMenu
