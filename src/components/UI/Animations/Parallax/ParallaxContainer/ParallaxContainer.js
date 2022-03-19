import React from "react";
import "./ParallaxContainer.css";

const ParallaxContainer = (props) => {
  return (
    <div className="element" style={{ overflow: "hidden" }}>
      {props.children}
    </div>
  );
};

export default ParallaxContainer;
