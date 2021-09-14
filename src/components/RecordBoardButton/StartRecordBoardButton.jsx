import React from 'react';

import { Box } from '@material-ui/core';
import { RecordingAPI } from "../../components/";

const buttonName = "Board Aufzeichnen";



// const useStyles = makeStyles((theme) => ({
//   margin: {
//     position: "relative",
//     top: 0,
//     center: 0,
//   },
// }));

export function StartRecordBoardButton(props) {
  return (
    <div>
      <Box display="flex" justifyContent="center">
        {/* start Board recording */}
        {/* <BoardButton
          variant="contained"
          color="primary"
          disableRipple
          // getMediaStream={this.getMediaStream}
          // className={classes.margin}
        ></BoardButton> */}
      </Box>
      <div>
        <RecordingAPI>
        {buttonName}
        </RecordingAPI>
      </div>
    </div>
  );
}
