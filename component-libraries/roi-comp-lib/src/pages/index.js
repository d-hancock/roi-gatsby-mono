import React, {Fragment} from "react"
import { Typography } from "@mui/material"

const IndexPage = () => {
  return (
    <Fragment>
      <header>
        {/* Had to remove tw prop because it was causing a ts error */}
        {/*<Typography variant="h1" tw="text-blue-400">Gatsby Theme Empty</Typography>*/}
        <Typography
          tw="text-green-800"
          variant="h1"
        >Gatsby Theme Empty</Typography>
      </header>
      <main>
        <p tw="text-blue-400">Create something amazing!</p>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  )
}

export default IndexPage
