import React, { useState } from "react";
import "./MainLogo.css";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const MainLogo = (props) => {
  const [firstRef] = useState(props.getHomeRef());
  const [secondRef] = useState(props.getSecondRef());
  const goto = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      ref={firstRef}
      className="one"
      id="home"
      style={{ boxSizing: "border-box", overflow: "hidden" }}
    >
      <div
        className="social-links small responsive-small"
        style={{ background: "transparent" }}
      >
        <MagneticButton
          id="main-fb"
          borderRadius="10px"
          fontSize="20px"
          noimage
          align="center"
          hoverColor="#3D548E"
          width="fit-content"
          height="fit-content"
          name="Facebook"
          borderWidth="0"
          onClick={() => goto("http://jsonplaceholder.com")}
          style={{ cursor: "pointer" }}
          className="bold green-hover social-icons-main"
        />
        <MagneticButton
          id="main-ln"
          borderRadius="10px"
          align="center"
          fontSize="20px"
          noimage
          hoverColor="#2464AD"
          width="fit-content"
          height="fit-content"
          name="LinkedIn"
          borderWidth="0"
          onClick={() => goto("http://jsonplaceholder.com")}
          style={{ cursor: "pointer" }}
          className="bold green-hover social-icons-main"
        />
        <MagneticButton
          id="main-twitter"
          borderRadius="10px"
          align="center"
          fontSize="20px"
          noimage
          hoverColor="#1C9CEA"
          width="fit-content"
          height="fit-content"
          name="Twitter"
          borderWidth="0"
          onClick={() => goto("http://jsonplaceholder.com")}
          style={{ cursor: "pointer" }}
          className="bold green-hover social-icons-main"
        />
      </div>
      <div className="rainbow"></div>

      <div className="main-logo-heading">
        {/* <Parallax speed={0.4}> */}
        <div className="logo"></div>
        <div className="main-heading">
          <h1 className="heading">
            <span className="blue">Emerge</span>
            <span className="violet-fade">Ability</span>
          </h1>
          <p className="uppercase bold responsive-small expand">
            A b i l i t i e s &nbsp; B e y o n d &nbsp; B o u n d a r i e s
          </p>
        </div>
        {/* </Parallax> */}
      </div>
      <div href="#two" className="button-container">
        <MagneticButton
          id="mainLogoButton"
          name="E &nbsp;&nbsp;X &nbsp;&nbsp;P &nbsp;&nbsp;L &nbsp;&nbsp;O &nbsp;&nbsp;R &nbsp;&nbsp;E"
          onClick={() => {
            window.scroll(0, secondRef.current.offsetTop - 130);
          }}
          rotate={"-30deg"}
          width="150px"
          height="150px"
        />
      </div>
    </div>
  );
};

export default MainLogo;
