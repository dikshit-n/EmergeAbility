import React, { useState } from "react";
import "./OurVision.css";
import { Row, Col } from "reactstrap";
// import MagneticButton from "../UI/MagneticButton/MagneticButton";
import ScrollButton from "../UI/ScrollButton/ScrollButton";

const OurVision = (props) => {
  const [ourVisionRef] = useState(props.getVisionRef());
  const [whatWeDoRef] = useState(props.getWhatWeDoRef());
  return (
    <div style={{ boxSizing: "border-box" }}>
      <br />
      <br />
      <br />
      <br />
      <div
        ref={ourVisionRef}
        className="heading-with-background center-heading"
      >
        <div className="ourvision-scroll-to">
          <ScrollButton
            onClick={() => {
              window.scroll(0, whatWeDoRef.current.offsetTop + 60);
            }}
            name="What We Do"
            textColor="#fa6a18"
            color="orange"
          />
        </div>
        <h1 className="orange" id="vision">
          Our Vision
        </h1>
        <h2 className="mini-heading orange">Our Vision</h2>
      </div>
      <Row
        className="d-flex justify-content-center our-vision"
        style={{ marginTop: "-50px" }}
      >
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ maxHeight: 300, position: "relative" }}
        >
          <div className="slim-description text-left flexy-our-vision">
            <h1 className="mini-heading orange">
              "Empowering by embracing difference"
            </h1>
            <p className="bold">
              Enable individuals to reach their full potential by highlighting
              their unique strengths/abilities and giving them the skills they
              need to succeed in this new world.
            </p>
            {/* <div className="ourvision-scroll-to">
              <MagneticButton
                id="ourvision-magnetic-button"
                name="K E E P &nbsp; E X P L O R I N G"
                onClick={() => {
                  window.scroll(0, whatWeDoRef.current.offsetTop + 60);
                }}
                hoverColor="#fa6a18"
                rotate="20deg"
                width="130px"
                height="130px"
              />
            </div> */}
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container-our-vision">
            <div className="img-13"></div>
            <div className=" img-13-shade"></div>
            <div className="img-14"></div>
            <div className=" img-14-shade"></div>
            <div className="img-15"></div>
            <div className=" img-15-shade"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurVision;
