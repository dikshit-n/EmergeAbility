import React, { useState } from "react";
import "./Six.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const Six = (props) => {
  const [sixthRef] = useState(props.getSixthRef());
  const [seventhRef] = useState(props.getSeventhRef());
  return (
    <div ref={sixthRef} style={{ position: "relative" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="d-flex justify-content-center six" id="six">
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container-six">
            <div className="img-7"></div>
            <div className=" img-7-shade"></div>
            <div className="img-8"></div>
            <div className=" img-8-shade"></div>
          </div>
        </Col>
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center d-flex justify-content-center"
        >
          <div className="slim-description text-left six-align">
            <h1 className="mini-heading purple">
              “Neurodiversity is not a deficit, it’s an asset.."
            </h1>
            <p className="bold">
              Neurodiversity considers brain differences as normal, rather than
              deficits. Neurodiversity (usually abbreviated to ND) is the
              diversity of all human brains and minds. Embracing this concept
              can benefit all children and young people with learning and
              thinking differences.
              <br />
              <br />
              Inclusive education advocates that all children can learn and that
              all pupils, including many considered to be disabled, need some
              form of support in learning during their time at school.
            </p>
          </div>
        </Col>
      </Row>
      <div className="six-button">
        <MagneticButton
          id="sixth-magnetic-button"
          name="E X P L O R E &nbsp; M O R E"
          onClick={() => {
            window.scroll(0, seventhRef.current.offsetTop);
          }}
          color=""
          hoverColor="#a356ff"
          rotate="20deg"
          width="150px"
          height="150px"
        />
      </div>
    </div>
  );
};

export default Six;
