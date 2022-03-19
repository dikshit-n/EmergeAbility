import React, { useEffect, useState } from "react";
import "./SideBar.css";
import CloseIcon from "../CloseIcon/CloseIcon";
import MagneticButton from "../MagneticButton/MagneticButton";

const SideBar = (props) => {
  const [homeref] = useState(props.getHomeRef());
  const [menuLinks, setMenuLinks] = useState([
    {
      name: "Home",
      id: "01",
      goto: "#home",
      color: "yellow",
      active: false,
      adjust: 0,
    },
    {
      name: "About",
      id: "02",
      goto: "#about",
      color: "red",
      active: false,
      adjust: 0,
    },
    {
      adjust: 100,
      name: "Project",
      id: "05",
      goto: "#projeccts",
      color: "purple",
      active: false,
    },
    {
      name: "Blog",
      adjust: 0,
      id: "06",
      goto: "#blog",
      color: "#00BFFF",
      active: false,
    },
    {
      name: "Team",
      adjust: 0,
      id: "03",
      goto: "#theteam",
      color: "#FF69B4",
      active: false,
    },
    {
      name: "Sign Up",
      id: "07",
      goto: "#signup",
      color: "green",
      adjust: 60,
      active: false,
    },
    {
      name: "Contact",
      id: "04",
      goto: "#contact",
      color: "#A97AD0",
      active: false,
      adjust: -70,
    },
  ]);

  useEffect(() => {
    setMenuLinks((prev) => {
      prev.map((el, index) => {
        el.goto = props.refs[index];
        return null;
      });
      return prev;
    });
  }, []);

  // useEffect(() => {
  //   if (props.show) setClassNames(["SideBar", "open"]);
  //   else setClassNames(["SideBar", "close"]);
  // }, [window.location.href, props.show]);

  // const setActive = (id) => {
  //   setMenuLinks((prev) => {
  //     let clone = prev.map((el) => {
  //       if (el.id === id) {
  //         el.active = true;
  //       } else {
  //         el.active = false;
  //       }
  //       return el;
  //     });
  //     return clone;
  //   });
  // };

  const goto = (link) => {
    window.open(link, "_blank");
  };
  var classNames = ["SideBar", props.show ? "open" : "close"];
  return (
    <div
      className={classNames.join(" ")}
      id="sidebar"
      // style={{  transform: props.show ? "translateX(0)" : "translateX(200vw)" }}
    >
      <div className="rainbow-sidebar"></div>
      <div className="mobile-only">
        <CloseIcon
          onClick={() => {
            // window.scroll(
            //   0,
            //   homeref.current.offsetTop
            //   // props.ref.current.getBoundingClientRect().height + window.scrollY
            // );
            props.onClick();
          }}
        />
      </div>
      <div className="sidebar-button">
        <MagneticButton
          id="side-bar-mag-netic-button"
          name="B A C K"
          rotate="-20deg"
          onClick={() => {
            // window.scroll(
            //   0,
            //   homeref.current.offsetTop
            //   // props.ref.current.getBoundingClientRect().height + window.scrollY
            // );
            props.onClick();
          }}
        />
      </div>
      <img
        src={require("../../../assets/images/BackGround Images/footer-logo.png")}
        alt=" "
        onClick={() => {
          window.scroll(
            0,
            homeref.current.offsetTop
            // props.ref.current.getBoundingClientRect().height + window.scrollY
          );
          // setActive("01");
          props.onClick();
        }}
        style={{ cursor: "pointer" }}
        className="sidebar-logo"
      />
      <div className="sidebar-social-links">
        <MagneticButton
          onClick={() => window.open("https://jsonplaceholder.com", "_blank")}
          className="fa fa-twitter shadow"
          width="30px"
          // noInner
          height="30px"
          id={"tw-social-1"}
          noimage
          includeHoverInside
          hoverColor="#1C9CEA"
          color={"white"}
          borderWidth={0}
        />
        <MagneticButton
          className="fa fa-linkedin shadow"
          onClick={() => window.open("https://jsonplaceholder.com", "_blank")}
          // noInner
          width="30px"
          height="30px"
          id={"ln-social-2"}
          noimage
          includeHoverInside
          hoverColor="#2464AD"
          color={"white"}
          borderWidth={0}
        />
        <MagneticButton
          className="fa fa-facebook shadow"
          onClick={() => window.open("https://jsonplaceholder.com", "_blank")}
          width="30px"
          height="30px"
          id={"fb-social-3"}
          noimage
          hoverColor="#3D548E"
          color={"white"}
          borderWidth={0}
        />
        {/* <i
          onClick={() => goto("http://jsonplaceholder.com")}
          className="fa fa-twitter shadow white"
          style={{ color: "white", cursor: "pointer" }}
        />
        <i
          onClick={() => goto("http://jsonplaceholder.com")}
          className="fa fa-linkedin shadow white"
          style={{ color: "white", cursor: "pointer" }}
        />
        <i
          onClick={() => goto("http://jsonplaceholder.com")}
          className="fa fa-facebook shadow white"
          style={{ color: "white", cursor: "pointer" }}
        /> */}
      </div>
      <div className="sidebar-social-links-words">
        <MagneticButton
          id="main-sidebar-fb"
          borderRadius="10px"
          fontSize="20px"
          noimage
          hoverColor="#3D548E"
          width="fit-content"
          height="fit-content"
          name="Facebook"
          borderWidth="0"
          onClick={() => goto("http://jsonplaceholder.com")}
          style={{ cursor: "pointer" }}
          className="bold green-hover social-icons-main"
        />
        <MagneticButton
          id="main-sidebar-ln"
          borderRadius="10px"
          fontSize="20px"
          noimage
          hoverColor="#2464AD"
          width="fit-content"
          height="fit-content"
          name="Linkedin"
          borderWidth="0"
          onClick={() => goto("http://jsonplaceholder.com")}
          style={{ cursor: "pointer" }}
          className="bold green-hover social-icons-main"
        />
        <MagneticButton
          id="main-sidebar-twitter"
          borderRadius="10px"
          fontSize="20px"
          noimage
          hoverColor="#1C9CEA"
          width="fit-content"
          height="fit-content"
          name="Twitter"
          borderWidth="0"
          onClick={() => goto("http://jsonplaceholder.com")}
          style={{ cursor: "pointer" }}
          className="bold green-hover social-icons-main"
        />
      </div>
      <div className="navs text-left">
        {menuLinks.map((el) => (
          <div key={el.id} className="each-nav">
            <div className="nav-number">
              <p style={{ color: el.color }}>{el.id}</p>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="nav-name"
              onClick={() => {
                // window.location.href = el.goto;
                // props.ids[11].scrollIntoView();
                let ref = el.goto();
                window.scroll(
                  0,
                  ref.current.offsetTop + el.adjust
                  // props.ref.current.getBoundingClientRect().height + window.scrollY
                );
                // setActive(el.id);
                props.onClick();
              }}
            >
              <a
                style={{ color: el.color, opacity: el.active ? 1 : 0.35 }}
                href={el.goto}
              >
                {el.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
