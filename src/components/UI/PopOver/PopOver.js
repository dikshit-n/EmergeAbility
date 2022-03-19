import React, { useRef, useState } from "react";
import { Overlay, Button, Popover } from "react-bootstrap";
import { useOutsideAlerter } from "../../Utility/DetectOutsideClick/outSideClick";
import "./PopOver.css";

export default function PopUp(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  useOutsideAlerter(ref, () => setShow(false));

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button
        style={props.style}
        className={props.className + " my-toggle-button"}
        onClick={handleClick}
      >
        {props.name}
        {props.component && props.component}
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="left"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">
            {props.options.map((el) => (
              <Button className="inner-pop-button" onClick={el.onClick}>
                {el.name}
              </Button>
            ))}
          </Popover.Title>
          {/* <Popover.Content>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Content> */}
        </Popover>
      </Overlay>
    </div>
  );
}
