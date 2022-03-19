import React, { useState } from "react";
import "./Projects.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";
import ScrollButton from "../UI/ScrollButton/ScrollButton";

const Projects = (props) => {
  const [projectRef] = useState(props.getProjectRef());
  const [contactRef] = useState(props.getContactRef());
  return (
    <div
      ref={projectRef}
      id="project"
      style={{ boxSizing: "border-box" }}
      style={{ position: "relative" }}
    >
      <div className="projects-left-scroll">
        {/* <MagneticButton
          rotate="30deg"
          hoverColor="#fa6a18"
          name="K E E P &nbsp; E X P L O R I N G"
          id="projects-scroll-button"
          color="#fa6a18"
          borderColor="#fa6a18"
          onClick={() => {
            window.scroll(0, contactRef.current.offsetTop - 60);
          }}
        /> */}
        <ScrollButton
          onClick={() => window.scroll(0, contactRef.current.offsetTop - 60)}
          name="Contact Us"
          textColor="#fa6a18"
          color="orange"
        />
      </div>
      <div className="heading-with-background">
        <h1 className="light-orange" id="projeccts">
          Projects
        </h1>
        <h2 className="orange mini-heading">Projects</h2>
      </div>
      <div className="projects-content">
        <div className="My-Projects" style={{ position: "relative" }}>
          <Row>
            <Col>
              <div className="text-left flexy-projects">
                <h1 className="mini-heading light-orange bold">
                  “Inclusion is within everyone’s ability....”
                </h1>
                <p className="bold">
                  The aim of this survey is to give us a snapshot of the
                  perceptions of educators towards inclusive education, and to
                  get respondents’ views of relevant training, as well as to
                  identify what is working well and what the gaps are.
                  <br />
                  <br />
                  Understanding the educators' knowledge and skills required to
                  create an inclusive environment, the involvement of support in
                  inclusive education and effective training programmes.
                </p>
              </div>
            </Col>
            <Col
              style={{ position: "relative" }}
              lg="4"
              className="hide-in-mobile"
            >
              <div className="img-19"></div>
              <div className="img-19-shade"></div>
              <div className="img-20"></div>
              <div className="img-20-shade"></div>
            </Col>
            <Col lg="3" sm="12">
              <div className="text-left top-down">
                <h1 className="mini-heading light-orange bold">
                  “Not all classrooms have four walls....”
                </h1>
                <p className="bold">
                  If you are a Preschool/ Higher Secondary school
                  Principal/teacher/tutor/counsellor kindly participate in our
                  research survey.
                </p>
              </div>
            </Col>
            <Col
              style={{ position: "relative" }}
              lg="4"
              sm="12"
              className="show-in-mobile"
            >
              <div className="img-19"></div>
              <div className="img-19-shade"></div>
              <div className="img-20"></div>
              <div className="img-20-shade"></div>
            </Col>
          </Row>
          <div className="projects-button">
            <MagneticButton
              hoverColor="#fa6a18"
              id="projects-magnetic-button"
              name="S U R V E Y &nbsp; L I N K"
              rotate="-30deg"
              onClick={() => {}}
              align="right"
              width="150px"
              height="150px"
              color="#fa6a18"
              align="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
