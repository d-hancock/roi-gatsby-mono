import React from "react"
import { GlobalStyles } from "twin.macro"

const StylesWrapper = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
  </div>
)

export default StylesWrapper
