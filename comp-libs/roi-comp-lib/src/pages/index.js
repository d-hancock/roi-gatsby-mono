import React, { Fragment } from "react";
import { Typography } from "@mui/material";

const IndexPage = () => {
  return (
    <Fragment>
      <header>
        {/* Had to remove tw prop because it was causing a ts error */}
        {/*<Typography variant="h1" tw="text-blue-400">Gatsby Theme Empty</Typography>*/}
        <Typography variant="h1">Gatsby Theme Empty</Typography>
      </header>
      <main>
        <p>Create something amazing!</p>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  )
}

export default IndexPage
