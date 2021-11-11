import React, { Fragment } from "react";
import { Button, Typography } from "@material-ui/core"
import StoryBookTest from "@roi/comp-lib-gatsby/src/components/StoryBookTest"


const AboutPage = () => {
  return (
    <Fragment>
      <header>
        <Typography variant="h1" color={'primary'}>Gatsby Theme Working</Typography>
      </header>
      <main>
        <p>Create something amazing!</p>
        <Button variant="contained">Material test</Button>
        <StoryBookTest test={"hi"}/>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  )
}

export default AboutPage;