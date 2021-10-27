import { Button } from "@material-ui/core";
import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
    display: "flex",
  };

export const PenDrawing = class extends React.Component {
  constructor(props) {
    super(props);
    this.PenDrawing = React.createRef();
  }

  render() {
    return (
      <div
        style={{
          height: "50%",
          position: "absolute",
          left: "0px",
          width: "50%",
          overflow: "hidden",
        }}
      >
        <ReactSketchCanvas
          style={styles}
          ref={this.PenDrawing}
          strokeWidth={5}
          strokeColor="black"
          eraseMode={true}
        />       
        <Button
          onClick={() => {
            this.canvas.current
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
        </Button>
      </div>
    );
  }
};
