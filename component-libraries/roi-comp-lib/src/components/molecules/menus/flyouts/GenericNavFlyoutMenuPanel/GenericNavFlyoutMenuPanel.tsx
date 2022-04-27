import * as React from "react"
import GenericFlyoutMenuMainSection from "../GenericFlyoutMenuMainSection"
import GenericFlyoutMenuFooterSection from "../GenericFlyoutMenuFooterSection"
import { GenericFlyoutMenuMainSectionProps } from "../GenericFlyoutMenuMainSection/GenericFlyoutMenuMainSection"

export interface GenericNavFlyoutMenuPanelProps extends React.HTMLProps<HTMLDivElement> {
  test?: string;
  mainSectionData: GenericFlyoutMenuMainSectionProps | Array<GenericFlyoutMenuMainSectionProps>
}

export const GenericNavFlyoutMenuPanel = (props: GenericNavFlyoutMenuPanelProps) => {
  const {} = props
  return (
    <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
      {/*<GenericFlyoutMenuMainSection />*/}
      <GenericFlyoutMenuFooterSection />
    </div>
  )
}

export default GenericNavFlyoutMenuPanel
