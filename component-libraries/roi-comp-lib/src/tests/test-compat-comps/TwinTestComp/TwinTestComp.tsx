import React from "react"

export interface TwinTestCompProps extends React.HTMLProps<HTMLDivElement> {
  test?: string;
}

export default (props: TwinTestCompProps) => {
  const {} = props

  return (
    <div
      tw="text-indigo-300 text-2xl"
    >
      My awesome component
    </div>
  )
};
