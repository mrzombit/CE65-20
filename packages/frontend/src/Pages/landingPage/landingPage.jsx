/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./landingPage.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

function landingPage() {
  return (
    <div className="py-4" style={{ marginBottom: "0rem" }}>
      <div class="d-flex justify-content-between px-5">
        <p class="logo-font">BIZCHECK</p>

        <Dropdown as={ButtonGroup}>
          <Button href="/Login" className="butt">Sign in</Button>

          <Dropdown.Toggle split className="butt" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="/Register">Sign up</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <p className="slogan-font">
          วางแผนธุรกิจกับเรา เพื่อประเมินความเป็นไปได้
        </p>
        <p className="slogan-l-font mb-4">
          เริ่มต้นธุรกิจของคุณด้วยการวางแผนทางการเงิน
        </p>

        <div className="d-flex justify-content-center">
          <div className="func-card-1 m-2">
            <p className="head-text-card">BIZ TOOLS</p>
            <img
              src={require("../../Assets/biztools-card.png")}
              class="card-img-2"
              style={{ transform: "scale(1) translate(0%, 0%)" }}
            />
          </div>
          <div className="func-card-2 m-2">
            <p className="head-text-card">CHECK BIZ</p>
            <img
              src={require("../../Assets/checkbiz-card.png")}
              class="card-img-2"
              style={{ transform: "scale(1) translate(0%, 0%)" }}
            />
          </div>

          <div className="func-card-block m-2">
            <div className="func-card-3 ">
              <p className="head-text-card">STATEMENTS</p>
              <img
                src={require("../../Assets/statement-card.png")}
                class="card-img-2"
                style={{ transform: "scale(1) translate(70%, -30%)" }}
              />
            </div>
            <div className="func-card-block-2 d-flex">
              <div className="func-card-4 mt-3">
                <p className="head-text-card">SENSITIVITY</p>
                <img
                  src={require("../../Assets/sensitivity-card.png")}
                  class="card-img-2"
                  style={{ transform: "scale(1) translate(-10%, -35%)" }}
                />
              </div>
              <div className="func-card-5 mt-3">
                <p className="head-text-card">COMPARE</p>
                <img
                  src={require("../../Assets/compare-card.png")}
                  class="card-img-2"
                  style={{ transform: "scale(1) translate(25%, 15%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landingPage;
