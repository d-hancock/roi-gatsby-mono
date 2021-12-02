import React from "react"
import QueryWrapper from "./src/context/QueryWrapper/QueryWrapper";
import GlobalStylesWrapper from "./src/context/GlobalStylesWrapper/GlobalStylesWrapper"

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = QueryWrapper;

export const wrapPageElement = ({ element }) => {
  return <GlobalStylesWrapper>{element}</GlobalStylesWrapper>
}
