import * as React from "react"

export interface StoryBookTestProps extends React.HTMLProps<HTMLDivElement> {
  test?: string;
}

export const StoryBookTest = (props: StoryBookTestProps) => {
  const { test } = props
  return (
    <div
      // @ts-ignore
      tw="text-2xl text-indigo-300"
      className={test}
    >My awesome component</div>
  )
}


