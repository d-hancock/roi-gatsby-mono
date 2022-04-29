import * as React from "react"
import tw from "twin.macro"
import { Popover, Transition } from "@headlessui/react"
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"

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


export interface GenericHeaderProps extends React.HTMLProps<HTMLDivElement> {
  hideOnScroll?: boolean;
}

export default (props: GenericHeaderProps) => {
  const {} = props
  return (
    <Popover tw="relative bg-white">
      <div tw="max-w-7xl mx-auto px-4 sm:px-6">
        <div tw="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div tw="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span tw="sr-only">Workflow</span>
              <img
                tw="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div tw="-mr-2 -my-2 md:hidden">
            <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span tw="sr-only">Open menu</span>
              <MenuIcon
                tw="h-6 w-6"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            tw="hidden md:flex space-x-10"
          >
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
          <div tw="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              tw="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              tw="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
      {/* @ts-ignore*/}
      <Transition
        as={React.Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          tw="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div tw="pt-5 pb-6 px-5">
              <div tw="flex items-center justify-between">
                <div>
                  <img
                    tw="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div tw="-mr-2">
                  <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span tw="sr-only">Close menu</span>
                    <XIcon
                      tw="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div tw="mt-6">
                <nav tw="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      tw="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        tw="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span tw="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div tw="py-6 px-5 space-y-6">
              <div tw="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  tw="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  tw="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    tw="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  tw="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p tw="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a
                    href="#"
                    tw="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
};
