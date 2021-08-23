import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
    display: "flex",
  };

export class PenDrawing extends React.Component {

  eraserWidth = 8;

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.eraseMode = {
      erase: true,
      notErase: false,
      
    } 
  }
  render() {
    return (
      <div
        style={{
          height: "100%",
          position: "absolute",
          left: "0px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ReactSketchCanvas
          ref={this.canvas}
          style={styles}
          // width="100vw"
          // height="100vh"
          strokeWidth={5}
          strokeColor="black"
          eraserWidth={5}
        />
        {/* <button
          onClick={() => {
            this.canvas.current.clear();
          }}
        >
          {" "}
          Erase Drawing
        </button> */}
        {/* <button
          onClick={() => {
            this.canvas.current
              .exportImage("png")
              .then((data) => {
                console.log(data);
              })
              .catch((e) => {
                console.log(e);
              });
          }}
          color="#20bf6b"
          title="I'm a button!"
        >
          Get Image
        </button> */}
      </div>
    );
  }
}



