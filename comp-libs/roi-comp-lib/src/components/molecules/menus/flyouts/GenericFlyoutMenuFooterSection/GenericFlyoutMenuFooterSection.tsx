import * as React from "react";

export interface GenericFlyoutMenuFooterSectionProps extends React.HTMLProps<HTMLDivElement> {
  test?: string;
}

export const GenericFlyoutMenuFooterSection = (props: GenericFlyoutMenuFooterSectionProps) => {
  const {} = props;
  return (
    <div>My awesome component</div>
  );
};

export default GenericFlyoutMenuFooterSection
