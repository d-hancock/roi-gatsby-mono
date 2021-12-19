import * as React from "react"
import GenericMenuItem, { GenericMenuItemProps } from "../../../atoms/menus/GenericMenuItem"

export interface GenericMenuItemListProps extends React.HTMLProps<HTMLDivElement> {
  itemListData: Array<GenericMenuItemProps>
}


export const GenericMenuItemList = (props: GenericMenuItemListProps) => {
  const { itemListData } = props
  return (
      <div tw="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        {itemListData.map((item) => (
          <GenericMenuItem
            name={item.name}
            description={item.description}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
  )
}

export default GenericMenuItemList
