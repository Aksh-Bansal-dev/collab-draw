import React from "react";
import Canvas from "../components/Canvas";
import Panel from "../components/Panel";

const Homepage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Canvas />
      <Panel />
    </div>
  );
};

export default Homepage;
