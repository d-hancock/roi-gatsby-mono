import * as React from "react"

export interface GenericMenuCallToActionItemProps extends React.HTMLProps<HTMLDivElement> {
  test?: string,
  name: string,
  href: string,
  icon: React.ComponentType
}

export const GenericMenuCallToActionItem = (props: GenericMenuCallToActionItemProps) => {
  const { name, href } = props
  return (
    <div
      key={name}
      tw="flow-root"
    >
      <a
        href={href}
        tw="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
      >
        <props.icon
          tw="flex-shrink-0 h-6 w-6 text-gray-400"
          aria-hidden="true"
        />
        <span tw="ml-3">{name}</span>
      </a>
    </div>
  )
}

export default GenericMenuCallToActionItem
