import React, { useEffect, useState } from "react";
import "./Parallax.css";

const Parallax = (props) => {
  const [offset, setOffset] = useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="parallax-background"
      style={{
        transform: `translateY(-${
          offset * (props.speed ? props.speed : 0.5)
        }px)`,
      }}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export default Parallax;
