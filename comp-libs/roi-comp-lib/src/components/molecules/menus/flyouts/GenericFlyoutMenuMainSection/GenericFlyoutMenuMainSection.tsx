import * as React from "react"
import GenericFlyoutMenuItem, { GenericFlyoutMenuItemProps } from "../GenericFlyoutMenuItem/GenericFlyoutMenuItem"


// need to revisit typescript to hammer out how to use these types.
export interface GenericFlyoutMenuMainSectionProps extends React.HTMLProps<HTMLDivElement> {
  mainSectionData: SectionData | SectionData[]
}

interface SectionData {
  sectionTitle?: string,
  sectionItemList: Array<GenericFlyoutMenuItemProps>
}

// Control styling with twin for the layouts.
// Passing data to lists. Control subsection layout.
// Props : layoutConfig,

export const GenericFlyoutMenuMainSection = (props: GenericFlyoutMenuMainSectionProps) => {
  const { mainSectionData } = props
  return (
    <div tw="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
      {/* TODO explore narrowing on type*/}
      {/*{mainSectionData.sectionItemList[0].map((item) => (*/}
      {/*  <GenericFlyoutMenuItem*/}
      {/*    name={item.name}*/}
      {/*    description={item.description}*/}
      {/*    href={item.href}*/}
      {/*    icon={item.icon}*/}
      {/*  />*/}
      {/*))}*/}
    </div>
  )
}

export default GenericFlyoutMenuMainSection
