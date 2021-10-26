import React from 'react';
import { Box } from "@material-ui/core";
import { CameraLoader, MicroLoader } from "..";


export function CameraMicroBox() {

    return (
      <div>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          alignItems="stretch"
          padding={1}
        >
          <Box>
            <CameraLoader />
          </Box>
          <Box m={1} p={1} />
          <Box>
            <MicroLoader />
          </Box>
        </Box>
      </div>
    );
}
