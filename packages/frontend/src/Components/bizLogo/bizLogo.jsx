import React from "react";
import "./bizLogo.css";
import { GiHairStrands } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";

function bizLogo() {
  return (
    <div className="biz-logo-body">
      <div className="d-flex flex-col">
        <div className="biz-logo-card">
          <div className="biz-logo"><GiCoffeeCup/></div>
        </div>
        <div className="biz-logo-select">
            <div className="circle-test"></div>
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
        </div>
      </div>
      <button className="biz-logo-submit">+ อัพโหลดภาพ</button>
    </div>
  );
}

export default bizLogo;
