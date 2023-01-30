import React from "react";
import "./projectTempleteCard.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";

function projectTempleteCard() {
  return (
    <div className="pjt-card">
      <div className="mb-1 pjt-icon">
        <SiHomeassistantcommunitystore />
      </div>
      <div className="pjt-title">Pet Store</div>
    </div>
  );
}

export default projectTempleteCard;
