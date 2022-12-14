import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";

function titleFFC(props) {
  return (
    <div>
      {props.title}&nbsp;
      <AiFillInfoCircle />
    </div>
  );
}

export default titleFFC;
