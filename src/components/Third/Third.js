import React, { useState } from "react";
import "./Third.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const Third = (props) => {
  const [thirdRef] = useState(props.getThirdRef());
  const [fourthRef] = useState(props.getFourthRef());
  return (
    <div id="three" ref={thirdRef}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="d-flex justify-content-center third">
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container-third">
            <div className="img-3"></div>
            <div className=" img-3-shade"></div>
            <div className="img-4"></div>
            <div className=" img-4-shade"></div>
            <div
              style={{ textAlign: "right", marginTop: "50px" }}
              className="second-scroll"
            >
              <br />
              <br />
              <br />
              <div id="three-button">
                <MagneticButton
                  rotate="30deg"
                  color="#fd2955"
                  hoverColor="#fd2955"
                  name="E X P L O R E &nbsp; M O R E"
                  id="third-scroll-button"
                  onClick={() => {
                    window.scroll(0, fourthRef.current.offsetTop);
                  }}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center d-flex justify-content-center"
        >
          <div className="slim-description text-left three-align">
            <br />
            <br />
            <br />
            <h1 className="mini-heading my-adjust-three red">
              "Maximising potential "
            </h1>
            <p className="bold">
              75 million school-aged children and youth are in desperate need of
              educational support, either in danger of, or already missing out
              on their education.
              <br />
              <br />
              Children and young people with disabilities and neurodivergent
              conditions are the most marginalised and vulnerable in many
              countries, and they are most likely to be excluded from education
              and future employment. They often face a multitude of barriers
              from an inaccessible learning environment to a lack of support and
              understanding of their unique learning and thinking processes.
              <br />
              <br />
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Third;
