import React from "react";
import "./ButtonWithIcon.css";
import { Button } from "reactstrap";

const ButtonWithIcon = (props) => {
  return (
    <Button
      size={props.size ? props.size : "sm"}
      color={props.color ? props.color : "primary"}
      onClick={props.onClick}
    >
      <img src={props.icon} width="20px" height="20px" />
      {props.children}
    </Button>
  );
};

export default ButtonWithIcon;
