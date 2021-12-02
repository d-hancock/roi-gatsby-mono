import React, { Fragment } from "react"
import TwinTestComp from "@roi/comp-lib-gatsby/src/components/compat-test-components/TwinTestComp"
import 'twin.macro'

const TestPage = () => {
  return (
    <Fragment>
      <header>
        <h1 tw="text-blue-700 text-3xl">Gatsby Theme Working</h1>
      </header>
      <main>
        <TwinTestComp/>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  )
}

export default TestPage;
