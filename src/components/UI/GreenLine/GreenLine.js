import React from "react";
import "./GreenLine.css";

const GreenLine = (props) => {
  return (
    <div>
      <div
        className="GreenLine"
        style={{
          backgroundColor: props.color ? props.color : "",
        }}
      ></div>
    </div>
  );
};

export default GreenLine;
