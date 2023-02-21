import React from "react";
import "./statementCard.css";
import { HiOutlineDotsVertical } from "react-icons/hi";

function statementCard(props) {
  return (
    <div>
      <div className="statement-card">
        <div className="statement-icon p-3 align-items-end justify-content-end">
          <HiOutlineDotsVertical />
        </div>
        <div className="statement-card-header">
        <span className="statement-title">{props.name}</span>
        <span className="statement-detail">{props.detail}</span>
      </div>
      </div>
      
    </div>
  );
}

export default statementCard;
