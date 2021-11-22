// import React, { Component } from "react";

// import { Sketchpad } from "../../components/";
// import { SketchpadContext } from "../../components/";
// import { sketchpadState } from "../../components/";

// // import "./index.scss";

// // import { makeStyles } from "@material-ui/core/styles";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: "flex",
// //     // alignItems: "center",
// //     // justifyContent: "center",
// //     margin: theme.spacing(1),
// //   },
// // }));
// export class SketchBoardCamOnMicOn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ...sketchpadState,
//       isTouchDevice: "ontouchstart" in window,
//       activateCanvas: this.activateCanvas,
//     };
//     window.addEventListener("resize", this.measureViewport);
//   }
//   measureViewport = () => {
//     this.setState({
//       viewportSize: {
//         width: window.innerWidth,
//         height: window.innerHeight,
//       },
//     });
//   };

//   activateCanvas = () => {
//     this.setState({
//       canvasStatus: true,
//     });
//   };

//   componentDidMount() {
//     this.measureViewport();
//   }
//   render() {
//     return (
//       <SketchpadContext.Provider value={this.state}>
//         <Sketchpad />
//       </SketchpadContext.Provider>
//     );
//   }
// }

import React from 'react';
import {BoardLayout} from "../../components/"

export const  SketchBoardCamOnMicOn = () => {
  return (
    <div>
      <BoardLayout />
    </div>
  )
}

