import React from "react";
import "./RadioButton.css";

const RadioButton = (props) => {
  return (
    <div
      className="round-2"
      style={{
        display: "block",
      }}
    >
      <input
        type="radio"
        id={props.name}
        onChange={props.onChange}
        name={props.name}
        defaultChecked={props.defaultChecked}
        checked={props.checked}
      />
      <label htmlFor={props.name}></label>
      <span
        style={{
          marginLeft: "28px",
          color: "rgba(51, 50, 50, 0.83)",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {props.displayName}
      </span>
    </div>
  );
};

export default RadioButton;
