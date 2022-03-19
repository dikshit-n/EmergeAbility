import React, { useEffect, useState } from "react";

const Parallax = (props) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${
          offset * (props.speed ? props.speed : 0.5)
        }px)`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Parallax;
