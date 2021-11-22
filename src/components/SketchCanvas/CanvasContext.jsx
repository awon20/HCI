import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

const useHistory = initialState => {
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([initialState]);

  const setState = (action, overwrite = false) => {
    const newState = typeof action === "function" ? action(history[index]) : action;
    if (overwrite) {
      const historyCopy = [...history];
      historyCopy[index] = newState;
      setHistory(historyCopy);
    } else {
      const updatedState = [...history].slice(0, index + 1);
      setHistory([...updatedState, newState]);
      setIndex(prevState => prevState + 1);
    }
  };
  const undo = () => index > 0 && setIndex(prevState => prevState - 1);
  const redo = () => index < history.length - 1 && setIndex(prevState => prevState + 1);

  return [history[index], setState, undo, redo];
}
export const CanvasProvider = ({ children }) => {
  const [elements, setElements, undo, redo] = useHistory([]);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineJoin = "round";
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;

    // on brouser
    var cv = document.getElementById("canvas");
    if(cv){
      cv.addEventListener("mousemove", (e) => {
        console.log({ x: e.offsetX, y: e.offsetY, z: e });
      });
    }
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };


  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadCanvas = async () => {
    const image = canvasRef.current.toDataURL("image/svg");
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = "image.svg";
    link.click();
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        downloadCanvas,
        draw,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);