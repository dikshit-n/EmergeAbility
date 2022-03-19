import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimateOnScroll = (props) => {
  const element = useRef(null);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "." + props.id,
      start: "top top",
      end: () => "+=" + document.querySelector("." + props.id).offsetWidth,
      //   end: "+=300px",
      pinSpacing: false,
      pin: true,
    });
    // gsap.to("." + props.id, {
    //   scrollTrigger: {
    //     trigger: "." + props.id,
    //     start: "top center",
    //     markers: true,
    //     end: "top 100px",
    //     scrub: true,
    //     // toggleActions: "restart pause reverse pause",
    //     // end: () => "+=" + document.querySelector("." + props.id).offsetWidth,
    //   },
    //   x: 400,
    //   ease: "none",
    //   rotation: 0,
    //   duration: 3,
    // });
  }, []);
  return (
    <div ref={element} className={props.id} style={{ zIndex: 0 }}>
      {props.children}
    </div>
  );
};

export default AnimateOnScroll;
