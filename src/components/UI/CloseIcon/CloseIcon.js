import React from "react";
import "./CloseIcon.css";

const CloseIcon = (props) => {
  return <div className="close-icon" onClick={props.onClick}></div>;
};

export default CloseIcon;
