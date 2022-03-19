import React, { useState } from "react";
import "./Second.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const Second = (props) => {
  const [secondRef] = useState(props.getSecondRef());
  const [thirdRef] = useState(props.getThirdRef());

  return (
    <div id="two" style={{ boxSizing: "border-box" }} ref={secondRef}>
      <Row className="d-flex justify-content-center second">
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ maxHeight: 300 }}
        >
          <div className="slim-description text-left secont-adjust">
            <h1 className="mini-heading orange">
              "Abilities Beyond Boundaries"
            </h1>
            <p className="bold" style={{ position: "relative" }}>
              <br />
              Education is not a privilege, it is a fundamental human right. The
              UNESCO: Global Education 2030 Agenda Sustainable Development Goal
              (SDG) 4 on education calls for inclusive and equitable quality
              education.
              <br />
              <div
                ref={secondRef}
                style={{ textAlign: "right", marginTop: "50px" }}
                className="second-scroll"
                href="#three"
              >
                <MagneticButton
                  rotate="30deg"
                  color="#fa6a18"
                  hoverColor="#fa6a18"
                  name="E X P L O R E &nbsp; M O R E"
                  id="second-scroll-button"
                  onClick={() => {
                    window.scroll(0, thirdRef.current.offsetTop + 100);
                    // window.location.href = "#three";
                  }}
                />
              </div>
            </p>
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container">
            <div className="img-1"></div>
            <div className=" img-1-shade"></div>
            <div className="img-2"></div>
            <div className=" img-2-shade"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Second;
