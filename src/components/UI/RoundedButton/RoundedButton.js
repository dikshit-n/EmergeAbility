import React from "react";
import "./RoundedButton.css";

const RoundedButton = (props) => {
  // useEffect(() => {
  //   const buttons = document.querySelectorAll("button");

  //   buttons.forEach((button) => {
  //     const div = button.querySelector("div");
  //     ["mouseenter", "mouseleave"].forEach((event) => {
  //       button.addEventListener(event, (e) => {
  //         div.style.left = `${e.offsetX}px`;
  //         div.style.top = `${e.offsetY}px`;
  //       });
  //     });
  //   });
  // }, []);

  return (
    <button
      onClick={props.onClick}
      type={props.type ? props.type : "button"}
      style={{
        transform: `rotate(${props.rotate ? props.rotate : 0})`,
        width: props.width ? props.width : 150,
        height: props.height ? props.height : 150,
        borderColor: props.color ? props.color : "black",
      }}
      className="rounded-button"
    >
      <div
        style={{
          borderColor: props.color ? props.color : "black",
        }}
      >
        <img
          src={require("../../../assets/images/icons/forward.png")}
          alt=" "
          className="skip-icon"
          color="#a717ee"
        />
        <p
          style={{
            textAlign: props.align ? props.align : "center",
            color: props.color ? props.color : "black",
          }}
        >
          {props.name}
        </p>
      </div>
      <img
        src={require("../../../assets/images/icons/forward.png")}
        alt=" "
        className="skip-icon"
      />
      <p
        style={{
          textAlign: props.align ? props.align : "center",
          color: props.color ? props.color : "black",
        }}
      >
        {props.name}
      </p>
    </button>
  );
};

export default RoundedButton;
