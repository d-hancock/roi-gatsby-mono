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

export interface GenericDropDownMenuProps extends React.HTMLProps<HTMLDivElement> {
  test?: string;
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


export const GenericDropDownMenu = (props: GenericDropDownMenuProps) => {
  const {} = props
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
            <span>Solutions</span>
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
                <div tw="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      tw="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <item.icon
                        tw="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div tw="ml-4">
                        <p tw="text-base font-medium text-gray-900">{item.name}</p>
                        <p tw="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div tw="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                  {callsToAction.map((item) => (
                    <div
                      key={item.name}
                      tw="flow-root"
                    >
                      <a
                        href={item.href}
                        tw="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          tw="flex-shrink-0 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span tw="ml-3">{item.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
export default GenericDropDownMenu
