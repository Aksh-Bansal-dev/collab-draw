import React from "react";
import { panelStyles } from "../styles/panel";
import ClearButton from "./controllingStuff/ClearButton";

const Panel: React.FC = () => {
  return (
    <div style={panelStyles}>
      <ClearButton />
    </div>
  );
};

export default Panel;
