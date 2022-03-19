import React from "react";
import MagneticButton from "../../UI/MagneticButton/MagneticButton";
import "./EachMember.css";

const EachMember = (props) => {
  return (
    <div className="member-container">
      <div className="adjust">
        <div style={{ width: 50 }}>
          <div className="badge">
            <p className="uppercase">{props.position}</p>
          </div>
        </div>
        <div className="each-member-content text-left">
          <div style={{ position: "relative" }}>
            <img src={props.image} alt=" " className="member-image" />
          </div>
          <p className="name"> {props.name}</p>
          <p style={{ whiteSpace: "wrap" }}> {props.job} </p>
          <div className="email">
            <p
              style={{ marginTop: 0 }}
              className="blue"
              onClick={() => (window.location.href = "mailto:" + props.email)}
            >
              <img
                src={require("../../../assets/images/icons/email.png")}
                alt=" "
                width="25px"
                height="15px"
              />
              &nbsp;
              {props.email}
            </p>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="social-cont">
            <MagneticButton
              onClick={() => window.open(props.twitter, "_blank")}
              className="fa fa-twitter bg-transparent shadow"
              width="30px"
              component={<i className="fa fa-twitter bg-transparent shadow" />}
              // noInner
              height="30px"
              id={props.name + "social-1"}
              noimage
              // includeHoverInside
              hoverColor="#1C9CEA"
              color={"white"}
              borderWidth={0}
            />
            <MagneticButton
              className="fa fa-linkedin bg-transparent shadow"
              onClick={() => window.open(props.linkedIn, "_blank")}
              // noInner
              component={<i className="fa fa-linkedin bg-transparent shadow" />}
              width="30px"
              height="30px"
              id={props.name + "social-2"}
              noimage
              // includeHoverInside
              hoverColor="#2464AD"
              color={"white"}
              borderWidth={0}
            />
            <MagneticButton
              className="fa fa-facebook bg-transparent shadow"
              onClick={() => window.open(props.facebook, "_blank")}
              component={<i className="fa fa-facebook bg-transparent shadow" />}
              // noInner
              width="30px"
              height="30px"
              // includeHoverInside
              id={props.name + "social-3"}
              noimage
              hoverColor="#3D548E"
              color={"white"}
              borderWidth={0}
            />
            {/* <i className="fa fa-twitter bg-transparent shadow" />
            <i className="fa fa-linkedin bg-transparent shadow" />
            <i className="fa fa-facebook bg-transparent shadow" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachMember;
