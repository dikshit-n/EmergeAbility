import React from "react";
import "./TextBox.css";

const TextBox = (props) => {
  return (
    <div className="TextBox">
      <label className="label">
        {props.required ? <p className="red">*</p> : null}
        <h1
          style={{ color: props.color ? props.color : "black" }}
          className={`textbox-label`}
        >
          {props.label}
        </h1>
      </label>
      <input
        style={{
          borderColor: props.borderColor ? props.borderColor : "black",
          width: props.width ? props.width : "90%",
          height: props.height ? props.height : 100,
        }}
        name={props.textboxName}
        className="input"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        type={props.type ? props.type : "text"}
        {...props}
      />
    </div>
  );
};

export default TextBox;
