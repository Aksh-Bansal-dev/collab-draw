import React from "react";
import { useCanvasStore } from "../../store/canvasStore";

const ClearButton: React.FC = () => {
  const ctx = useCanvasStore((state) => state.reff);
  const handleClear = () => {
    ctx.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };
  return <button onClick={handleClear}>Clear</button>;
};

export default ClearButton;
