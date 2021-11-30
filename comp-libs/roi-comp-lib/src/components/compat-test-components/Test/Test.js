import React from "react"
import { Button, Typography } from "@mui/material";


export const Test = () => {

  return (
    <>
      {/*needed to remove tw prop because of ts error*/}
      {/*<Typography tw="text-blue-400" variant="h3">Testing Material UI</Typography>*/}

      <Typography variant="h3">Testing Material UI</Typography>
      <Button variant={"contained"}>Testing</Button>
    </>
  )

}


export default Test
