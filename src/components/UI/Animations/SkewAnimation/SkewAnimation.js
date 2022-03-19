import React, { useEffect, useRef } from "react";
// import { findDOMNode } from "react-dom";
import useWindowSize from "./hooks/useWindowSize";
import "./SkewAnimation.css";
function SkewAnimation(props) {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);
  // const getBoundingClientRect = (element) => {
  //   var style = findDOMNode(element).style;
  //   // var style = window.getComputedStyle(element);
  //   var margin = {
  //     left: parseInt(style["margin-left"]),
  //     right: parseInt(style["margin-right"]),
  //     top: parseInt(style["margin-top"]),
  //     bottom: parseInt(style["margin-bottom"]),
  //   };
  //   var padding = {
  //     left: parseInt(style["padding-left"]),
  //     right: parseInt(style["padding-right"]),
  //     top: parseInt(style["padding-top"]),
  //     bottom: parseInt(style["padding-bottom"]),
  //   };
  //   var border = {
  //     left: parseInt(style["border-left"]),
  //     right: parseInt(style["border-right"]),
  //     top: parseInt(style["border-top"]),
  //     bottom: parseInt(style["border-bottom"]),
  //   };

  //   var rect = element.current.getBoundingClientRect();
  //   rect = {
  //     left: rect.left - margin.left,
  //     right: rect.right - margin.right - padding.left - padding.right,
  //     top: rect.top - margin.top,
  //     bottom:
  //       rect.bottom -
  //       margin.bottom -
  //       padding.top -
  //       padding.bottom -
  //       border.bottom,
  //   };
  //   rect.width = rect.right - rect.left;
  //   rect.height = rect.bottom - rect.top;
  //   return rect;
  // };
  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      //   getBoundingClientRect(scrollContainer).height
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    // const velocity = +acceleration;
    // const skew = velocity * 7.5;

    scrollContainer.current.style.transform = `translateY(-${data.rounded}px)`;
    //Assign skew and smooth scrolling to the scroll container
    // scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className="scrollContainer">
      <div ref={scrollContainer} className="skewContainer">
        {props.children}
      </div>
    </div>
  );
}

export default SkewAnimation;
