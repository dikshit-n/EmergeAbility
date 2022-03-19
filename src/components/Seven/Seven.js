import React, { useState } from "react";
import "./Seven.css";
import { Row, Col } from "reactstrap";
// import MagneticButton from "../UI/MagneticButton/MagneticButton";
import ScrollButton from "../UI/ScrollButton/ScrollButton";

const Seven = (props) => {
  const [seventhRef] = useState(props.getSeventhRef());
  const [aboutRef] = useState(props.getAboutRef());
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div ref={seventhRef}></div>
      <Row className="d-flex justify-content-center seven">
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ position: "relative" }}
          //   className="flexy"
        >
          <div className="slim-description text-left flexy-seven" id="seven">
            <h1 className="mini-heading light-green">
              “Let your abilities define you.. ”
            </h1>
            <p className="bold">
              The understanding of inclusive education is different across
              various regions of the world. One of the key difficulties
              surrounding inclusive education in developing countries is the
              lack of research about education in these countries. The studies
              show that there are serious gaps in the developing nations’
              education system to make it fit for everyone in a community.
              <br />
              <br />
              Children with special needs have the right to receive the
              schooling and social support they need within the ordinary
              structures available in their local communities. Strong advocacy
              is needed for this to happen. In particular parents need to be
              empowered, communities mobilised and professionals trained in new
              ways of working.
              <br />
              <br />
              EmergeAbility aims to make education more inclusive for all
              children to reach their true potential by shaping and promoting
              future-ready paradigms for learning beyond boundaries.
            </p>
          </div>
          <div className="seventh-button">
            <ScrollButton
              onClick={() => {
                window.scroll(0, aboutRef.current.offsetTop + 50);
              }}
              name="About Us"
              color="green"
              textColor="#7ac054"
            />
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container-seven">
            <div className="img-9"></div>
            <div className=" img-9-shade"></div>
            <div className="img-10"></div>
            <div className=" img-10-shade"></div>
          </div>

          {/* <div className="seventh-button">
            <MagneticButton
              id="seventh-magnetic-button"
              name="K E E P &nbsp; E X P L O R I N G"
              onClick={() => {
                window.scroll(0, aboutRef.current.offsetTop);
              }}
              hoverColor="#7ac054"
              rotate="20deg"
              width="150px"
              height="150px"
            />
          </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default Seven;
