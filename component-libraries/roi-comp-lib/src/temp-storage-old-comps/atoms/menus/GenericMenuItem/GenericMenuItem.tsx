import * as React from "react"


export interface GenericMenuItemProps extends React.HTMLProps<HTMLDivElement> {
  name: string,
  description?: string,
  href: string,
  icon?: React.ComponentType
}

// TODO make this compatible with gatsby using the Link component
export const GenericMenuItem = (props: GenericMenuItemProps) => {
  const { name, href, description } = props


  return (
    <a
      key={name}
      href={href}
      tw="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      {props.icon && (
        <props.icon
          tw="flex-shrink-0 h-6 w-6 text-indigo-600"
          aria-hidden="true"
        />
      )}
      <div tw="ml-4">
        <p tw="text-base font-medium text-gray-900">{name}</p>
        {description && (
          <p tw="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
    </a>
  )
}

export default GenericMenuItem
