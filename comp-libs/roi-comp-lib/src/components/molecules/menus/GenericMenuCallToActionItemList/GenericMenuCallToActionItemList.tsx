import * as React from "react"
import GenericMenuCallToActionItem from "../GenericMenuCallToActionItem"
import { GenericMenuCallToActionItemProps } from "../GenericMenuCallToActionItem/GenericMenuCallToActionItem"

export interface GenericMenuCallToActionProps extends React.HTMLProps<HTMLDivElement> {
  test?: string;
  menuCtaData: Array<GenericMenuCallToActionItemProps>
}


export const GenericMenuCallToActionItemList = (props: GenericMenuCallToActionProps) => {
  const { menuCtaData } = props
  return (
    <div tw="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
      {menuCtaData.map((item) => (
        <GenericMenuCallToActionItem
          name={item.name}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </div>
  )
}

export default GenericMenuCallToActionItemList
