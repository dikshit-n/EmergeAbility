import React, { useState, useEffect } from "react";
import { UncontrolledCarousel } from "reactstrap";

const Example = (props) => {
  const [carousalItems, setCarousalItems] = useState([]);
  useEffect(() => {
    setCarousalItems((prev) => [
      ...props.images.map((el, index) => ({
        src: el.image,
        caption: el.title ? el.title : "",
        altText: el.title ? el.title : " ",
        header: el.title ? el.title : "",
        key: index,
      })),
    ]);
  }, [props.images]);

  return (
    <UncontrolledCarousel controls={props.controls} items={carousalItems} />
  );
};

export default Example;
