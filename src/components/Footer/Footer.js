import React, { useState } from "react";
import MagneticButton from "../UI/MagneticButton/MagneticButton";
import "./Footer.css";

const Footer = (props) => {
  const [homeref] = useState(props.getHomeRef());
  // const gotoMyWebsite = () => {
  //   window.open("http://www.dikshit.live", "_blank");
  // };

  return (
    <div className="Footer-container" style={{ position: "relative" }}>
      <div className="warning">
        ⚠️ Your personal information will be kept strictly confidential and will
        not be sold, reused, rented, loaned or otherwise disclosed. Any
        information you give us will be treated with the utmost care and will
        not be used in ways that you have not consented to, unless you have used
        our website in an unlawful manner.
      </div>
      <div className="Footer">
        <img
          src={require("../../assets/images/BackGround Images/footer-logo.png")}
          alt=" "
          className="footer-logo"
          onClick={() => {
            window.scroll(
              0,
              homeref.current.offsetTop
              // props.ref.current.getBoundingClientRect().height + window.scrollY
            );
          }}
          style={{ cursor: "pointer" }}
        />
        <div className="footer-social-links">
          <MagneticButton
            onClick={() => window.open("https://jsonplaceholder.com", "_blank")}
            className="fa fa-twitter shadow icons-footer"
            width="50px"
            height="50px"
            id={props.name + "social-1"}
            noimage
            hoverColor="transparent"
            backgroundColor="white"
            color={"white"}
            borderWidth="0px"
          />
          <MagneticButton
            className="fa fa-linkedin shadow icons-footer"
            onClick={() => window.open("https://jsonplaceholder.com", "_blank")}
            width="50px"
            height="50px"
            id={props.name + "social-2"}
            noimage
            backgroundColor="white"
            hoverColor="transparent"
            color={"white"}
            borderWidth="0px"
          />
          <MagneticButton
            className="fa fa-facebook shadow icons-footer"
            onClick={() => window.open("https://jsonplaceholder.com", "_blank")}
            width="50px"
            height="50px"
            id={props.name + "social-3"}
            noimage
            backgroundColor="white"
            hoverColor="transparent"
            color={"white"}
            borderWidth="0px"
          />
          {/* <i className="fa fa-twitter shadow" />
        <i className="fa fa-linkedin shadow" />
        <i className="fa fa-facebook shadow" /> */}
        </div>
        <p className="copyright white light-weight">
          &copy; 2020 All Rights Reserved to EmergeAbility.
          {/* Developed by{" "}
        <span style={{ cursor: "pointer" }} onClick={gotoMyWebsite}>
          Dikshit
        </span> */}
        </p>
        <p className="poweredBy black">
          This website is powered by{" "}
          <div>
            <img
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://lumosind.carrd.co/", "_blank")
              }
              alt=" "
              src={require("../../assets/images/logo/logo.png")}
              className="footer-company-logo"
            />
          </div>
        </p>
      </div>
      <div className="dummy-space"></div>
    </div>
  );
};

export default Footer;
