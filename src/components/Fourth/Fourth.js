import React, { useState } from "react";
import "./Fourth.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const Fourth = (props) => {
  const [fourthRef] = useState(props.getFourthRef());
  const [fifthRef] = useState(props.getFifthRef());
  return (
    <div ref={fourthRef} id="four" style={{ boxSizing: "border-box" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="d-flex justify-content-center fourth">
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ maxHeight: 300, position: "relative" }}
        >
          <div
            className="slim-description text-left flexy"
            style={{ maxWidth: 250 }}
          >
            <h1 className="mini-heading sky-blue">
              “Every child deserves a future ”
            </h1>
            <p className="bold">
              They often face a multitude of barriers from an inaccessible
              learning environment to a lack of support and understanding of
              their unique learning and thinking processes.
              <br />
              <br />
              <div
                href="#five"
                style={{ textAlign: "right" }}
                id="fourth-scroll-button"
              >
                <MagneticButton
                  rotate="30deg"
                  color="#3e92c6"
                  hoverColor="#3e92c6"
                  name="E X P L O R E &nbsp; M O R E"
                  id="_"
                  onClick={() => {
                    window.scroll(0, fifthRef.current.offsetTop - 70);
                  }}
                />
              </div>
            </p>
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container">
            <div className="img-5"></div>
            <div className=" img-5-shade"></div>
            <div className="img-6"></div>
            <div className=" img-6-shade"></div>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Fourth;
