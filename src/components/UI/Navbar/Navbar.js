import React from "react";
import PopOver from "../PopOver/PopOver";
import "./Navbar.css";

var fontSizes = ["15px", "16px", "17px", "18px", "19px", "20px"];
var index = 0;

const Navbar = (props) => {
  // const [popoverOpen, setPopoverOpen] = useState(false);

  // const toggle = () => setPopoverOpen(!popoverOpen);
  const increaseFontSize = () => {
    if (index >= 0 && index < 5) {
      index = index + 1;
    }
    var ps = document.getElementsByTagName("p");
    for (ps of ps) {
      ps.style.fontSize = fontSizes[index];
    }
  };
  const decreaseFontSize = () => {
    if (index > 0 && index <= 5) {
      index = index - 1;
    }
    var ps = document.getElementsByTagName("p");
    for (ps of ps) {
      ps.style.fontSize = fontSizes[index];
    }
  };
  const changeFontSizeToDefault = () => {
    window.location.reload();
  };
  return (
    <div className="navbar">
      <div className="pop">
        <PopOver
          className="font-button"
          name="A"
          component={
            <img
              src={require("../../../assets/images/icons/up-down.png")}
              className="updown"
              alt=" "
            />
          }
          options={[
            { name: "+", onClick: () => increaseFontSize() },
            { name: "-", onClick: () => decreaseFontSize() },
          ]}
        />
      </div>
      <button className="font-button-default" onClick={changeFontSizeToDefault}>
        A
      </button>
    </div>
  );
};

export default Navbar;
