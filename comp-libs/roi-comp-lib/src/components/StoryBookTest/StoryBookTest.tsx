import * as React from "react"

export interface StoryBookTestProps extends React.HTMLProps<HTMLDivElement> {
  test?: string;
}

export const StoryBookTest = (props: StoryBookTestProps) => {
  const {test} = props;
  return (
    <div className={test}>My awesome component</div>
  )
}


