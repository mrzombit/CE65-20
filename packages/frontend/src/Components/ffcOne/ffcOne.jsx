import React from "react";
import TitleFFC from "../titleFFC/titleFFC";
import "./ffcOne.css";
import { IconContext } from "react-icons";
import { AiFillInfoCircle } from "react-icons/ai";

function ffcOne() {
  return (
    <IconContext.Provider value={{ color: "#9fa7c2" }}>
      <div className="ffc-body-text">
        <TitleFFC title="Investment Rationale" icon={<AiFillInfoCircle />} />
      </div>
    </IconContext.Provider>
  );
}

export default ffcOne;
