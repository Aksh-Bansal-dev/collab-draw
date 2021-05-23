import React, { useState } from "react";
import { useCanvasStore } from "../../store/canvasStore";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState("black");
  const ctx = useCanvasStore((state) => state.reff);

  const handleColor = (newColor: string) => {
    setColor(newColor);
    ctx.current.strokeStyle = color;
  };

  const handlePencil = () => {
    ctx.current.strokeStyle = color;
  };
  return (
    <>
      <input
        value={color}
        onChange={(e) => handleColor(e.target.value)}
        type="color"
        name="color"
        id="colorpicker"
      />
      <button onClick={handlePencil}>Pencil</button>
    </>
  );
};

export default ColorPicker;
