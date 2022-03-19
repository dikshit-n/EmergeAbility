import React from "react";
import "./ScrollButton.css";

const ScrollButton = (props) => {
  let classNames = [
    "chevron",
    props.color ? props.color + "-chevron" : "black-chevron",
  ];

  return (
    <div className="myscrollbuttoncontainer" onClick={props.onClick}>
      <div className={classNames.join(" ")}></div>
      <div className={classNames.join(" ")}></div>
      <div className={classNames.join(" ")}></div>
      <span
        className="text"
        style={{ color: props.textColor ? props.textColor : "black" }}
      >
        {props.name ? props.name : "Scroll down"}
      </span>
    </div>
  );
};

export default ScrollButton;
