import React from "react";
import { useCanvasStore } from "../../store/canvasStore";

const Eraser: React.FC = () => {
  const ctx = useCanvasStore((state) => state.reff);
  const setEraser = () => {
    ctx.current.strokeStyle = "grey";
  };
  return <button onClick={setEraser}>Eraser</button>;
};

export default Eraser;
