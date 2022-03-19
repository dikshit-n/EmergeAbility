import React from "react";
import ReactBSAlert from "react-bootstrap-sweetalert";
import "./Alert.css";

const Alert = (props) => {
  return props.status === "Success" ? (
    <ReactBSAlert
      success
      style={{ display: "block" }}
      title={props.message ? props.message : "Success"}
      onConfirm={() => props.hideAlert()}
      onCancel={() => props.hideAlert()}
      confirmBtnBsStyle="info"
      btnSize=""
    ></ReactBSAlert>
  ) : props.status === "Error" ? (
    <ReactBSAlert
      style={{ display: "block" }}
      title={props.message ? props.message : "Error Occured !"}
      onConfirm={() => props.hideAlert()}
      onCancel={() => props.hideAlert()}
      confirmBtnBsStyle="danger"
      btnSize=""
    />
  ) : null;
};

export default Alert;
