import React, { useEffect, useRef, useState } from "react";
import { getCanvas } from "../utils/canvasContext";
import { useCanvasStore } from "../store/canvasStore";

const Canvas: React.FC = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const setReff = useCanvasStore((state) => state.setReff);

  const [isDrawing, setDrawing] = useState(false);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    setDrawing(true);
  };
  const stopDrawing = () => {
    contextRef.current.closePath();
    setDrawing(false);
  };
  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = e.nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  const handleClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    setDrawing(true);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();

    contextRef.current.closePath();
    setDrawing(false);
  };

  useEffect(() => {
    contextRef.current = getCanvas(canvasRef.current);
    setReff(contextRef);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      onClick={(e) => handleClick(e)}
      style={{
        background: "grey",
      }}
      onMouseDown={(e) => startDrawing(e)}
      onMouseUp={stopDrawing}
      onMouseMove={(e) => draw(e)}
    />
  );
};

export default Canvas;
