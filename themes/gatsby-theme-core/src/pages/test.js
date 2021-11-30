import React, { Fragment } from "react"
import TwinTestComp from "../components/compat-test-components/TwinTestComp"

const AboutPage = () => {
  return (
    <Fragment>
      <header>
        <h1>Gatsby Theme Working</h1>
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

export default AboutPage;
