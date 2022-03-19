import React, { useRef, useState } from "react";
import MagneticButton from "../UI/MagneticButton/MagneticButton";
import ScrollButton from "../UI/ScrollButton/ScrollButton";
import "./Five.css";

const Five = (props) => {
  const [fifthRef] = useState(props.getFifthRef());
  const [sixthRef] = useState(props.getSixthRef());
  const fiveTwo = useRef();
  const fiveThree = useRef();
  return (
    <div
      ref={fifthRef}
      style={{ position: "relative" }}
      style={{ boxSizing: "border-box" }}
    >
      <div className="controlled text-left">
        <h1 className="mini-heading">
          Neurodiversity <span className="red">is the</span>{" "}
          <span className="violet">diversity</span>{" "}
          <span className="red">
            of all human brains and minds including conditions such as:
            <br />
            <br />
            <br />
          </span>
        </h1>
      </div>
      <div
      // style={{ position: "relative" }}>
      >
        <div style={{ position: "relative" }}>
          <div
            id="five"
            className="part-1"
            style={{
              background: "#fd2655b8",
              // borderTop: "1px solid #fd2655b8",
            }}
          >
            {/* <img
              className="red-bg-image"
              src={require("../../assets/images/BackGround Images/red.png")}
              alt=" "
            /> */}
            <div className="slant-container">
              <div className="slant"></div>
            </div>
            <img
              src={require("../../assets/images/Chidren/umbrella.png")}
              className="umbrella"
              alt=" "
            />
            <div className="no-rotate">
              <div className="each-row">
                <div style={{ margin: 10 }}>
                  <h1 className="number" style={{ color: "#d0254b" }}>
                    01
                  </h1>
                </div>
                <div className="para text-left">
                  <h5 className="bold yellow">ADHD</h5>
                  <p className="bold white light-weight">
                    ADHD stands for attention deficit hyperactivity disorder, a
                    condition with symptoms such as inattentiveness,
                    impulsivity, and hyperactivity. The symptoms differ from
                    person to person.
                  </p>
                </div>
                <div className="empty-div">
                  {/* <img
                  src={require("../../assets/images/Chidren/brain.png")}
                  alt=" "
                  className="empty-div-img"
                /> */}
                </div>
              </div>

              <div
                id="first-second"
                className="each-row odd"
                style={{ position: "relative" }}
              >
                <div className="empty-div brain-2"></div>
                <div className="para text-left">
                  <h5 className="bold yellow">Autism Spectrum Condition</h5>
                  <p className="bold white light-weight">
                    Autistic Spectrum Condition (ASC) a developmental condition
                    which includes a number of symptoms and behaviours which
                    affect the way in which a group of people understand and
                    react to the world around them
                  </p>
                </div>
                <div style={{ margin: 10 }}>
                  <h1 className="number" style={{ color: "#d0254b" }}>
                    02
                  </h1>
                </div>
                <div className="fifth-left-scroll">
                  <ScrollButton
                    onClick={() => {
                      let firstSecond = document
                        .getElementById("first-second")
                        .getBoundingClientRect().height;
                      window.scroll(0, firstSecond + window.scrollY + 40);
                    }}
                    name="Continue"
                    color="white"
                    textColor="white"
                  />
                  {/* <MagneticButton
                    rotate="30deg"
                    hoverColor="#d0254b"
                    name="E X P L O R E &nbsp; M O R E"
                    id="my-fivth-two-scroll-button"
                    color="white"
                    borderColor="white"
                    onClick={() => {
                      let firstSecond = document
                        .getElementById("first-second")
                        .getBoundingClientRect().height;
                      window.scroll(0, firstSecond + window.scrollY);
                    }}
                  /> */}
                </div>
              </div>

              <div id="third-one" className="each-row">
                <div style={{ boxSizing: "border-box" }}>
                  <h1 className="number" style={{ color: "#d0254b" }}>
                    03
                  </h1>
                </div>
                <div className="para text-left">
                  <h5 className="bold yellow">Dyslexia</h5>
                  <p className="bold white light-weight">
                    Dyslexia is a learning difference that involves difficulty
                    in reading due to problems identifying speech sounds and
                    learning how they relate to letters and words (decoding). It
                    affects areas of the brain that process language.
                  </p>
                </div>
                <div className="empty-div my-3-brain"></div>
                <div className="fifth-scroll">
                  <MagneticButton
                    rotate="30deg"
                    hoverColor="#d0254b"
                    name="E X P L O R E &nbsp; M O R E"
                    id="my-fivth-scroll-button"
                    color="white"
                    borderColor="white"
                    onClick={() => {
                      window.scroll(0, fiveTwo.current.offsetTop);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={fiveTwo} className="part-1 odd-part" id="fivethtwo">
          <div className="no-rotate">
            <div className="each-row">
              <div style={{ margin: 10 }}>
                <h1 className="number faded-pink">04</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold sky-blue">Dyscalculia</h5>
                <p className="bold">
                  Dyscalculia is a specific and persistent difficulty in
                  understanding numbers which can lead to a diverse range of
                  difficulties with mathematics.
                </p>
              </div>
              <div className="empty-div my-5-brain"></div>
            </div>

            <div className="each-row odd">
              <div className="empty-div"></div>
              <div className="para text-left">
                <h5 className="bold sky-blue">Dyspraxia</h5>
                <p className="bold">
                  Dyspraxia, also known as developmental coordination disorder
                  (DSD), is a common disorder that affects movement and
                  coordination.
                </p>
              </div>
              <div style={{ margin: 10 }}>
                <h1 className="number faded-pink">05</h1>
              </div>
            </div>

            <div className="each-row">
              <div style={{ margin: 10 }}>
                <h1 className="number faded-pink">06</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold sky-blue">Dysgraphia</h5>
                <p className="bold">
                  Dysgraphia is a learning condition that affects writing
                  abilities. It can manifest itself as difficulties with
                  spelling, poor handwriting and trouble putting thoughts on
                  paper.
                </p>
              </div>
              <div className="fifth-scroll">
                {/* <ScrollButton
                  onClick={() => {
                    window.scroll(0, fiveThree.current.offsetTop);
                  }}
                  name="Explore More"
                  color="pink"
                  textColor="#a356ff"
                /> */}
                <MagneticButton
                  rotate="30deg"
                  color="#FD4F73"
                  hoverColor="#FD4F73"
                  name="E X P L O R E &nbsp; M O R E"
                  id="fivetwo"
                  onClick={() => {
                    window.scroll(0, fiveThree.current.offsetTop);
                  }}
                />
              </div>
              <div className="empty-div brain-3"></div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div id="fifththree" ref={fiveThree}>
          <br />
          <br />
          <br />
          <div style={{ position: "relative" }}>
            {/* <div className="part-3-bg"></div> */}
            <div className="slant-container-right">
              <div className="slant-right"></div>
            </div>
            {/* style={{ background: "#fa6b18db" }} */}
            <div className="part-3">
              <img
                src={require("../../assets/images/Chidren/rainbow-small.png")}
                className="rainbow-small"
                alt=" "
              />
              <div className="no-rotate-2">
                <div className="each-row">
                  <div style={{ margin: 10 }}>
                    <h1 className="number" style={{ color: "#f1b490" }}>
                      07
                    </h1>
                  </div>
                  <div className="para text-left">
                    <h5 className="bold dark-red">
                      Developmental Language Disorders
                    </h5>
                    <p className="bold white light-weight">
                      Developmental Language Disorder or DLD (previously known
                      as Specific Language Impairment or SLI) is a persistent
                      type of speech, language and communication that cannot be
                      explained by an obvious cause.
                    </p>
                  </div>
                  <div className="empty-div my-7-brain"></div>
                </div>

                <div className="each-row odd">
                  <div className="fifth-left-scroll-2">
                    <MagneticButton
                      rotate="30deg"
                      hoverColor="#fa6b18db"
                      hoverTextColor="white"
                      backgroundColor="white"
                      name="E X P L O R E &nbsp; M O R E"
                      id="fivethreee"
                      color="#fa6b18db"
                      borderColor="transparent"
                      onClick={() => {
                        window.scroll(0, sixthRef.current.offsetTop + 100);
                      }}
                    />
                  </div>
                  <div className="empty-div my-8-brain"></div>
                  <div className="para text-left">
                    <h5 className="bold dark-red">Tourette Syndrome</h5>
                    <p className="bold white light-weight">
                      Tourette syndrome (TS) is a neurological disorder
                      characterized by repetitive, stereotyped, involuntary
                      movements and vocalizations called tics
                    </p>
                  </div>
                  <div style={{ margin: 10 }}>
                    <h1 className="number" style={{ color: "#f1b490" }}>
                      08
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
