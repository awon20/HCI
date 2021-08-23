import React from 'react';
import { Box } from "@material-ui/core";
import { CameraLoader } from "../../components";
import { MicroLoader } from "../../components";



export function CameraMicroBox() {

    return (
      // <Box display="flex" justifyContent="center" pt={4} pr={6} pb={4} pl={6}>
      <Box display="flex" justifyContent="center">
        {/* <Box m={1} p={1}> */}
        <Box>
          <CameraLoader />
        </Box>
        {/* <Box m={1} p={1}> */}
        <Box>
          <MicroLoader />
        </Box>
      </Box>
    );
}
