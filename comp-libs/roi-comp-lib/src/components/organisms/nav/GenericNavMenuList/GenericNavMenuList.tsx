import * as React from "react"
import { Popover, Transition } from "@headlessui/react"
import tw from "twin.macro"
import { ChevronDownIcon } from "@heroicons/react/solid"
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline"
import GenericNavFlyoutMenu from "../../menus/flyouts/GenericNavFlyoutMenu"

export interface GenericNavMenuListProps extends React.HTMLProps<HTMLDivElement> {
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
const resources = [
  {
    name: "Help Center",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description: "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  { name: "Security", description: "Understand how we take your privacy seriously.", href: "#", icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  { id: 2, name: "How to use search engine optimization to drive traffic to your site", href: "#" },
  { id: 3, name: "Improve your customer experience", href: "#" },
]

export const GenericNavMenuList = (props: GenericNavMenuListProps) => {
  const {} = props
  return (
    <Popover.Group
      as="nav"
      tw="hidden md:flex space-x-10"
    >
      <GenericNavFlyoutMenu
        buttonLabel="Solutions"
        menuListData={solutions}
        ctaListData={callsToAction}
      />

      <a
        href="#"
        tw="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Pricing
      </a>
      <a
        href="#"
        tw="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Docs
      </a>

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
              <span>More</span>
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
              <Popover.Panel tw="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div tw="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {resources.map((item) => (
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
                  <div tw="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3 tw="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                      <ul
                        role="list"
                        tw="mt-4 space-y-4"
                      >
                        {recentPosts.map((post) => (
                          <li
                            key={post.id}
                            tw="text-base truncate"
                          >
                            <a
                              href={post.href}
                              tw="font-medium text-gray-900 hover:text-gray-700"
                            >
                              {post.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div tw="mt-5 text-sm">
                      <a
                        href="#"
                        tw="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {" "}
                        View all posts <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
  )
}

export default GenericNavMenuList
