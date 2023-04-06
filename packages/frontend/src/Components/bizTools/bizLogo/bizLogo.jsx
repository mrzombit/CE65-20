import React from "react";
import "./bizLogo.css";
import { GiCoffeeCup } from "react-icons/gi";

function bizLogo() {
  return (
    <div className="biz-logo-body">
      <div className="d-flex flex-col">
        <div className="biz-logo-card">
          <div className="biz-logo">
            <GiCoffeeCup />
          </div>
        </div>
        <div className="biz-logo-select">
          <div className="circle-test"></div>
          <div className="can-scroll">
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
            <div className="litBox-test"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default bizLogo;
