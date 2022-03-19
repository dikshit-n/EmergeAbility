import React from "react";
import "./CheckBox.css";

const CheckBox = (props) => {
  return (
    <div
      className="round"
      style={{
        display: "block",
      }}
    >
      <input
        type="checkbox"
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

export default CheckBox;
