import React, { useEffect, useState } from "react";
import "./OurMission.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";
import ScrollButton from "../UI/ScrollButton/ScrollButton";
var brainVideo, playVideo;
const OurMission = (props) => {
  const [playing, setPlaying] = useState(false);
  const [ourMissionRef] = useState(props.getMissionRef());
  const [ourVisionRef] = useState(props.getVisionRef());
  const [image, setImage] = useState(
    require("../../assets/images/icons/forward.png")
  );

  useEffect(() => {
    playVideo = document.getElementById("mi-mag-but");
    brainVideo = document.getElementById("brain-video");
    brainVideo.onended = () => {
      playVideo.style.opacity = 1;
      setPlaying(false);
      setImage(require("../../assets/images/icons/forward.png"));
    };
    brainVideo.addEventListener("mouseover", () => {
      playVideo.style.opacity = 1;
    });
    brainVideo.addEventListener("mouseleave", () => {
      playVideo.style.opacity = 0;
    });
    playVideo.addEventListener("mouseover", () => {
      playVideo.style.opacity = 1;
    });
    playVideo.addEventListener("mouseleave", () => {
      playVideo.style.opacity = 0;
    });
    playVideo.addEventListener("click", () => {
      setTimeout(() => {
        playVideo.style.opacity = 0;
      }, 500);
    });
  }, []);

  const playToggle = () => {
    if (playing) {
      brainVideo.pause();
      setImage(require("../../assets/images/icons/forward.png"));
    } else {
      brainVideo.play();
      setImage(require("../../assets/images/icons/pause.png"));
    }
    setPlaying((prev) => !prev);
  };

  return (
    <div
      ref={ourMissionRef}
      className="our-mission"
      style={{ boxSizing: "border-box" }}
    >
      <div className="heading-with-background center-heading">
        <h1 className="pink" id="our--mission">
          Our Mission
        </h1>
        <h2 className="mini-heading pink">Our Mission</h2>
      </div>
      <Row
        className="d-flex justify-content-center change-in-mobile"
        id="mission"
      >
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="myourmission-scroll-to">
            <ScrollButton
              onClick={() => {
                window.scroll(0, ourVisionRef.current.offsetTop + 60);
              }}
              name="Our Vision"
              textColor="#e36df9"
              color="pink"
            />
          </div>
          <div className="ourmission-image">
            <video
              poster={require("../../assets/images/videos/brainThumb.PNG")}
              id="brain-video"
              src={require("../../assets/images/videos/brain.mp4")}
              width="100%"
              height="100%"
              alt=" "
            />
            {/* <h1 className="heading pink">
              Brain
              <br /> Video
            </h1> */}
            <div className="our-mission-button" id="mi-mag-but">
              <MagneticButton
                id="our-mission-magnetic-button"
                name={playing ? "P A U S E" : "P L A Y V I D E O"}
                onClick={playToggle}
                src={image}
                width="150px"
                height="150px"
              />
            </div>
          </div>
        </Col>
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ minHeight: 300, position: "relative" }}
        >
          <div className="slim-description text-left our-mission-content">
            <h1 className="mini-heading pink">
              “Breaking barriers by building inclusion... ”
            </h1>
            <p className="bold">
              Our goal is to remove barriers and ensure access and participation
              for all young people in education and employment regardless of
              cognitive differences. We are building an open, inclusive
              ecosystem to bring education and employment into the 21st Century.
            </p>
          </div>
          {/* <div className="ourmission-scroll-to">
            <MagneticButton
              id="ourmission-magnetic-button"
              name="K E E P &nbsp;  E X P L O R I N G"
              onClick={() => {
                window.scroll(0, ourVisionRef.current.offsetTop + 60);
              }}
              rotate="20deg"
              width="130px"
              height="130px"
            />
          </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default OurMission;
