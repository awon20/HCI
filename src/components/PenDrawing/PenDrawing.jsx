// import React from "react";
// import { ReactSketchPenDrawing } from "react-sketch-PenDrawing";

//   const styles = {
//     border: "0.0625rem solid #9c9c9c",
//     borderRadius: "0.25rem",
//     display: "flex",
//   };

// export class PenDrawing extends React.Component {

//   eraserWidth = 8;

//   constructor(props) {
//     super(props);
//     this.PenDrawing = React.createRef();
//     this.eraseMode = {
//       erase: true,
//       notErase: false,
      
//     } 
//   }
//   render() {
//     return (
//       <div
//         style={{
//           height: "100%",
//           position: "absolute",
//           left: "0px",
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         <ReactSketchPenDrawing
//           ref={this.PenDrawing}
//           style={styles}
//           // width="100vw"
//           // height="100vh"
//           strokeWidth={5}
//           strokeColor="black"
//           eraserWidth={5}
//         />
//         {/* <button
//           onClick={() => {
//             this.PenDrawing.current.clear();
//           }}
//         >
//           {" "}
//           Erase Drawing
//         </button> */}
//         {/* <button
//           onClick={() => {
//             this.PenDrawing.current
//               .exportImage("png")
//               .then((data) => {
//                 console.log(data);
//               })
//               .catch((e) => {
//                 console.log(e);
//               });
//           }}
//           color="#20bf6b"
//           title="I'm a button!"
//         >
//           Get Image
//         </button> */}
//       </div>
//     );
//   }
// }



import React from "react";
import { ReactSketchPenDrawing } from "react-sketch-PenDrawing";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem"
};

export const PenDrawing = class extends React.Component {
  constructor(props) {
    super(props);

    this.PenDrawing = React.createRef();
  }

  render() {
    return (
      <div>
        <ReactSketchPenDrawing
          ref={this.PenDrawing}
          strokeWidth={5}
          strokeColor="black"
        />
        <button
          onClick={() => {
            this.PenDrawing.current
              .exportImage("png")
              .then(data => {
                console.log(data);
              })
              .catch(e => {
                console.log(e);
              });
          }}
        >
          Get Image
        </button>
      </div>
    );
  }
};
