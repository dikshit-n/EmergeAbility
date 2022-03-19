import React, { useState } from "react";
import "./ContactUs.css";
import MagneticButton from "../UI/MagneticButton/MagneticButton";
import ScrollButton from "../UI/ScrollButton/ScrollButton";

const ContactUs = (props) => {
  const [ref] = useState(props.getTeamRef());
  const [contactRef] = useState(props.getContactRef());
  const [signUpRef] = useState(props.getSignUpRef());

  return (
    <div
      ref={contactRef}
      id="contact"
      style={{ position: "relative" }}
      style={{ boxSizing: "border-box" }}
    >
      <div className="heading-with-background">
        <h1 className="pink">Contact Us</h1>
        <h2 className="mini-heading pink">Contact Us</h2>
      </div>
      <div>
        <h1
          className="capitalise mini-heading"
          style={{ maxWidth: 500, margin: "auto" }}
        >
          Feel free to drop an email for further communications
          <br />
          <br />
          <br />
        </h1>
      </div>
      <div className="contactus-button">
        <MagneticButton
          id="contactus-magnetic-button"
          name="C O N T A C T &nbsp;&nbsp; U S"
          rotate="-30deg"
          onClick={() => {
            window.scroll(
              0,
              ref.current.offsetTop + 60
              // props.ref.current.getBoundingClientRect().height + window.scrollY
            );
          }}
          align="right"
          width="150px"
          height="150px"
          color="pink"
          align="center"
        />
        <div className="contact-left-scroll">
          <ScrollButton
            onClick={() => window.scroll(0, signUpRef.current.offsetTop + 60)}
            name="Sign Up"
            textColor="#a356ff"
            color="pink"
          />
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default ContactUs;
