import React from "react";
import { SketchpadContext } from "./SketchContext";

import "./index.scss";
import {Buttons} from "./Tools/Buttons/Buttons";

export class Sketchpad extends React.Component {
  constructor(props) {
    super(props);
    this.onDown = this.onDown.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onUp = this.onUp.bind(this);
    this.canvasRef = React.createRef();

    // initialize cursor stuff
    this.isMouseDown = false;
    this.lastCursorX = 0;
    this.lastCursorY = 0;

    // initialize drawing styles
    this.lineWidth = 10;
    this.lineColor = "black";
    this.lineWidthInputValue = undefined;
  }

  onDown = (e) => {
    this.context.activateCanvas();

    // Open the onMove mouse event
    this.isMouseDown = true;

    // Define line styles (must be defined before every draw)
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.strokeStyle = this.lineColor;

    // Begin drawing a new line by passing the second argument as true
    this.drawLine(e, true);
  };

  onMove = (e) => {
    // Open the onMove mouse event to draw the line
    if (this.isMouseDown) {
      this.drawLine(e);
    }
  };

  onUp = (e) => {
    // Close the onMove mouse event
    this.isMouseDown = false;
  };

  getCursorPosition(e) {
    // Returns the x and y coordinates of the touch position relative to the viewport
    const x = e.touches && e.touches[0] ? e.touches[0].pageX : e.clientX;
    const y = e.touches && e.touches[0] ? e.touches[0].pageY : e.clientY;
    // console.log(x, y);
    return { x, y };
  }

  drawLine(e, isNewLine) {
    // Establish connection with canvas
    this.ctx.beginPath();
    // Retrieve the current cursor position
    const cursor = this.getCursorPosition(e);
    // Determine if its the first point in the line segment and track the coordinate accordingly
    const lastCursorX = isNewLine ? cursor.x - 1 : this.lastCursorX;
    const lastCursorY = isNewLine ? cursor.y - 1 : this.lastCursorY;
    // Move and draw the next point in the line segment the previous-most point in which the cursor came from
    this.ctx.moveTo(lastCursorX, lastCursorY);
    this.ctx.lineTo(cursor.x, cursor.y);
    // Apply the stroke styles
    this.ctx.stroke();
    // Remember the current  cursor position for the next draw
    this.lastCursorX = cursor.x;
    this.lastCursorY = cursor.y;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.ctx = this.canvasRef.current.getContext("2d");
    console.log(this.ctx);
  }
  // this function Erasing the whole canvas
  clearSketch = (e, canvasRef) => {
    this.ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
  };
    // this function reset the sketch
  resetSketch = (e, canvasRef) => {
    this.ctx.restore();
  };

  changeColor = (e) => {
    this.lineColor = e.target.value;
  };

  changeWidth = (e) => {
    this.lineWidth = e.target.value;
    this.lineWidthInputValue = this.lineWidth;
  };

  downloadSketch = (e) => {
    this.canvasRef.current.toDataURL("image/png");
  };

  render() {
    const status = this.context.canvasStatus ? "active" : "inactive";
    const computedCanvasSize = this.canvasRef.current
      ? this.canvasRef.current.getBoundingClientRect()
      : {};

    return (
      <section className="sketchpad">
        <canvas
          ref={this.canvasRef}
          className={`sketchpad-canvas ${status}`}
          onMouseDown={this.onDown}
          onMouseMove={this.onMove}
          onMouseOut={this.onUp}
          onMouseUp={this.onUp}
          onTouchStart={this.onDown}
          onTouchMove={this.onMove}
          onTouchEnd={this.onUp}
          width={computedCanvasSize.width}
          height={computedCanvasSize.height}
        />
        <div className={`sketchpad-controls ${status}`}>
          <Buttons
            label="clear"
            href="/sketchboard-cam-on"
            type="clear"
            onClick={(e) => this.clearSketch(e)}
          />
          <Buttons
            download={true}
            label="download"
            href="/sketchboard-cam-on"
            type="download"
            onClick={(e) => this.downloadSketch(e)}
          />
          <Buttons
            reset={true}
            label="rest"
            href="/sketchboard-cam-on"
            type="reset"
            onClick={(e) => this.resetSketch(e)}
          />
          <input type="color" onChange={(e) => this.changeColor(e)} />
          <input
            type="number"
            max="1000"
            placeholder="Line Weight"
            onChange={(e) => this.changeWidth(e)}
          />
        </div>
      </section>
    );
  }
}

Sketchpad.contextType = SketchpadContext;
// console.log(Sketchpad.contextType);

