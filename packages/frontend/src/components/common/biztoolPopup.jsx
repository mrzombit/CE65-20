import React from "react";
import "./biztoolPopup.css";
import onClickOutside from "react-onclickoutside";
import BizTextInfo from "../bizTools/bizTextInfo/bizTextInfo";
import { AiOutlineClose } from "react-icons/ai";

function BiztoolPopup(props) {
  return props.trigger ? (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="d-flex flex-col align-items-center justify-content-between">
          <BizTextInfo title={props.title} />
          <AiOutlineClose onClick={props.close} />
        </div>
        <hr></hr>
        <div className="popup-content">
          {props.content}
        </div>
      </div>
    </div>
  ) : null;
}

export default onClickOutside(BiztoolPopup);
