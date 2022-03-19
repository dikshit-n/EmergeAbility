import React from "react";
import "./HamburgerIcon.css";

const HamburgerIcon = (props) => {
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.getElementById("nav-icon-1") !== null &&
  //       document.getElementById("nav-icon-2") !== null &&
  //       document.getElementById("nav-icon-3") !== null
  //     ) {
  //       if (window.innerWidth > 700) {
  //         if (window.pageYOffset > 600) {
  //           document.getElementById("nav-icon-1").style =
  //             "background-color: black !important";
  //           document.getElementById("nav-icon-2").style =
  //             "background-color: black !important";
  //           document.getElementById("nav-icon-3").style =
  //             "background-color: black !important";
  //         } else {
  //           document.getElementById("nav-icon-1").style =
  //             "background-color: white !important";
  //           document.getElementById("nav-icon-2").style =
  //             "background-color: white !important";
  //           document.getElementById("nav-icon-3").style =
  //             "background-color: white !important";
  //         }
  //       } else {
  //         document.getElementById("nav-icon-1").style =
  //           "background-color: black !important";
  //         document.getElementById("nav-icon-2").style =
  //           "background-color: black !important";
  //         document.getElementById("nav-icon-3").style =
  //           "background-color: black !important";
  //       }
  //     }
  //   });
  // }, []);

  return (
    <div onClick={props.onClick} className="HamburgerIcon">
      <div className="last" id="nav-icon-1"></div>
      <div id="nav-icon-2"></div>
      <div id="nav-icon-3"></div>
    </div>
  );
};

export default HamburgerIcon;
