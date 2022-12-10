/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./bizButton.css";
import { VscAccount, VscHome, VscExtensions } from "react-icons/vsc";

function bizButton(props) {
  
  return (
    <button class="btn biz-butt">
        <div class="biz-butt-icon">
          {props.icon}
        </div>
        <div class="biz-butt-block">
          <p className="biz-butt-name">{props.name}</p>
          <p className="biz-butt-details">{props.details}</p>
        </div>
        <div>{props.add}</div>
    </button>
  );
}

export default bizButton;
