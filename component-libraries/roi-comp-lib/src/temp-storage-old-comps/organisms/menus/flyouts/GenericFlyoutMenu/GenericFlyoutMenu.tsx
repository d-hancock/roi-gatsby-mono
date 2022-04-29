import * as React from "react"
import { Popover } from "@headlessui/react"
import {
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from "@heroicons/react/outline"

export interface GenericFlyoutMenuProps extends React.HTMLProps<HTMLDivElement> {
  test?: string;
  staticProp?: boolean;
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


export const GenericFlyoutMenu = (props: GenericFlyoutMenuProps) => {
  const { staticProp } = props
  return (
    <Popover.Panel
      static={staticProp}
      tw="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
    >
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

  )
}
export default GenericFlyoutMenu
