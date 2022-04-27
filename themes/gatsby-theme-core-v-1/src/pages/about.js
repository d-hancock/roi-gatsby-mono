import React, { Fragment } from "react"
import { Button, Typography } from "@mui/material"

const AboutPage = () => {
  return (
    <Fragment>
      <header>
        <Typography
          variant="h1"
          color={"primary"}
        >Gatsby Theme Working</Typography>
      </header>
      <main>
        <p className="text-3xl">Create something amazing!</p>
        <Button variant="contained">Material test</Button>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  )
}

export default AboutPage
