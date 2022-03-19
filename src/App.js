import React, { useRef, useState } from "react";
import "./App.css";
import MainLogo from "./components/MainLogo/MainLogo";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Fourth from "./components/Fourth/Fourth";
// import Parallax from "./components/UI/Parallax/Parallax";
import Five from "./components/Five/Five";
import Six from "./components/Six/Six";
import Seven from "./components/Seven/Seven";
import AboutUs from "./components/AboutUs/AboutUs";
import OurMission from "./components/OurMission/OurMission";
import OurVision from "./components/OurVission/OurVision";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import Projects from "./components/Projects/Projects";
import ContactUs from "./components/ContactUs/ContactUs";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/UI/SideBar/SideBar";
import SkewAnimation from "./components/UI/Animations/SkewAnimation/SkewAnimation";
import HamburgerIcon from "./components/UI/HamburgerIcon/HamburgerIcon";
import Navbar from "./components/UI/Navbar/Navbar";
import Alert from "./components/UI/Alert/Alert";
// import PopOver from "./components/UI/PopOver/PopOver";

// var main,
//   second,
//   third,
//   fourth,
//   fifth,
//   sixth,
//   seventh,
//   aboutUs,
//   ourMission,
//   ourVision,
//   whatWeDo,
//   meetTheTeam,
//   projects,
//   contactUs,
//   signUp,
//   form;

function App() {
  const [show, setShow] = useState(false);
  const [status, setstatus] = useState(null);
  const [message, setmessage] = useState("");
  // const [ids, setIds] = useState([]);
  const meetTheTeamRef = useRef();
  const signUpRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  const sixthRef = useRef();
  const seventhRef = useRef();
  const missionRef = useRef();
  const visionRef = useRef();
  const whatWeDoRef = useRef();

  const setStatus = (s) => {
    setstatus(s);
  };

  const setMessage = (m) => {
    setmessage(m);
  };

  const hideAlert = () => {
    setstatus(null);
    setmessage("");
  };

  const getAppId = () => {
    return document.getElementById("appId");
  };

  const getHomeRef = () => {
    return homeRef;
  };
  const getSecondRef = () => {
    return secondRef;
  };
  const getThirdRef = () => {
    return thirdRef;
  };
  const getFourthRef = () => {
    return fourthRef;
  };
  const getFifthRef = () => {
    return fifthRef;
  };
  const getAboutRef = () => {
    return aboutRef;
  };
  const getProjectRef = () => {
    return projectRef;
  };
  const getContactRef = () => {
    return contactRef;
  };

  const getTeamRef = () => {
    return meetTheTeamRef;
  };
  const getSignUpRef = () => {
    return signUpRef;
  };
  const getSixthRef = () => {
    return sixthRef;
  };
  const getSeventhRef = () => {
    return seventhRef;
  };
  const getMissionRef = () => {
    return missionRef;
  };
  const getVisionRef = () => {
    return visionRef;
  };
  const getWhatWeDoRef = () => {
    return whatWeDoRef;
  };

  const getIn = () => {
    setShow(true);
  };
  const goback = () => {
    setShow(false);
  };

  return (
    <div className="App" id="appId">
      <div className="navbar-container">
        <Navbar getAppId={getAppId} />
      </div>
      {/* <div className="navbar-container">
       
      </div> */}
      <div className="hamburgur-container">
        <HamburgerIcon onClick={getIn} />
      </div>
      <SideBar
        show={show}
        onClick={goback}
        refs={[
          getHomeRef,
          getAboutRef,
          getProjectRef,
          getTeamRef,
          getTeamRef,
          getSignUpRef,
          getContactRef,
        ]}
        getHomeRef={getHomeRef}
        // ids={ids}
      />
      <SkewAnimation>
        <div id="my-main-logo">
          <MainLogo
            onClick={getIn}
            getHomeRef={getHomeRef}
            getSecondRef={getSecondRef}
          />
        </div>
        <div className="controll-width">
          <div id="my-second-div">
            <Second getSecondRef={getSecondRef} getThirdRef={getThirdRef} />
          </div>
          <div id="my-third-div">
            <Third getThirdRef={getThirdRef} getFourthRef={getFourthRef} />
          </div>
          <div id="my-fourth-div">
            <Fourth getFourthRef={getFourthRef} getFifthRef={getFifthRef} />
          </div>
        </div>
        <div id="my-fifth-div">
          <Five getFifthRef={getFifthRef} getSixthRef={getSixthRef} />
        </div>
        <div className="controll-width">
          <div id="my-sixth-div">
            <Six getSixthRef={getSixthRef} getSeventhRef={getSeventhRef} />
          </div>
          <div id="my-seventh-div">
            <Seven getAboutRef={getAboutRef} getSeventhRef={getSeventhRef} />
          </div>
          <div id="my-about-us">
            <AboutUs getAboutRef={getAboutRef} getMissionRef={getMissionRef} />
          </div>
          <div id="my-our-mission">
            <OurMission
              getMissionRef={getMissionRef}
              getVisionRef={getVisionRef}
            />
          </div>
          <div id="my-our-vision">
            <OurVision
              getVisionRef={getVisionRef}
              getWhatWeDoRef={getWhatWeDoRef}
            />
          </div>
        </div>
        <div id="my-what-we-do">
          <WhatWeDo getWhatWeDoRef={getWhatWeDoRef} getTeamRef={getTeamRef} />
        </div>
        <div id="my-my-team">
          <MeetTheTeam getTeamRef={getTeamRef} getProjectRef={getProjectRef} />
        </div>
        <div id="my-projects">
          <Projects
            getProjectRef={getProjectRef}
            getContactRef={getContactRef}
          />
        </div>
        <div id="my-contact-us">
          <ContactUs
            getTeamRef={getTeamRef}
            getContactRef={getContactRef}
            getSignUpRef={getSignUpRef}
          />
        </div>
        <div id="my-sign-up">
          <SignUp
            getSignUpRef={getSignUpRef}
            setStatus={setStatus}
            setMessage={setMessage}
            hideAlert={hideAlert}
            status={status}
          />
        </div>

        <Footer getHomeRef={getHomeRef} />
      </SkewAnimation>
      <div
        className="scroll-to-top-button"
        onClick={() => {
          window.scroll(
            0,
            0
            // props.ref.current.getBoundingClientRect().height + window.scrollY
          );
        }}
      >
        <img
          src={require("./assets/images/icons/top.png")}
          alt=" "
          width="30px"
          height="30px"
        />
      </div>
      <Alert status={status} message={message} hideAlert={hideAlert} />
    </div>
  );
}

export default App;
