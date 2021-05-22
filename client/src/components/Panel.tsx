import React from "react";
import { panelStyles } from "../styles/panel";
import ClearButton from "./controllingStuff/ClearButton";
import ColorPicker from "./controllingStuff/ColorPicker";

const Panel: React.FC = () => {
  return (
    <div style={panelStyles}>
      <ClearButton />
      <ColorPicker />
    </div>
  );
};

export default Panel;
