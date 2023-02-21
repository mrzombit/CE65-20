import React from "react";
import "./bizHeader.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { AiFillInfoCircle } from "react-icons/ai";

function bizHeader(props) {
  return (
    <IconContext.Provider value={{ color: "#9fa7c2" }}>
      <div className="biz-body d-flex justify-content-between">
        <div className="biz-head-text">
          {props.title}&nbsp;
          <Link to={props.infoPath}>
            <AiFillInfoCircle />
          </Link>
        </div>
        {/* {props.btnName == "" ? null : (
          <div className="btn-mr">
            <Bizbtn name={props.btnName} path={props.btnPath} color={props.btnColor}/>
          </div>
        )} */}
      </div>
      <hr className="line-hr my-3"></hr>
    </IconContext.Provider>
  );
}

export default bizHeader;
