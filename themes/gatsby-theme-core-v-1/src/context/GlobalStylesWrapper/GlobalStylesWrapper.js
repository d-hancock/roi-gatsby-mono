import React from "react"
import { GlobalStyles } from "twin.macro"

const GlobalStylesWrapper = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
  </div>
)

export default GlobalStylesWrapper
