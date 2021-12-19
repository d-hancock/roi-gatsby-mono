import * as React from "react";

export interface GenericMenuFooterListProps extends React.HTMLProps<HTMLDivElement> {
  string?: string;
}

export const GenericMenuFooterList = (props: GenericMenuFooterListProps) => {
  const {} = props;
  return (
    <div>My awesome component</div>
  );
};

export default GenericMenuFooterList
