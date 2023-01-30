import React, { useState } from "react";
import "./newInvestmentProject.css";
import onClickOutside from "react-onclickoutside";
import BizTextInfo from "../bizTextInfo/bizTextInfo";
import { AiOutlineClose } from "react-icons/ai";
import BizLogo from "../bizLogo/bizLogo";
import ProjectTempleteCard from "../projectTempleteCard/projectTempleteCard";

function newInvestmentProject(props) {
  return props.trigger ? (
    <div className="popup-overlay">
      <div className="new-pj-card">
        <div className="d-flex flex-col align-items-center justify-content-between">
          <BizTextInfo title="สร้างโปรเจคธุรกิจใหม่" />
          <AiOutlineClose onClick={props.close} />
        </div>
        <hr></hr>
        <div className="new-invest-form">
          <div className="d-flex label-newInvest-pj">
            <form>
              <div className="input-container">
                <BizTextInfo title="ชื่อธุรกิจ" />
                <input
                  className="input-newInvest-pj"
                  style={{ width: "280px" }}
                  type="text"
                  name="uname"
                  required
                />
              </div>
              <div className="d-flex flex-col">
                <div className="input-container ">
                  {/* <BizTextInfo title="Project Logo"/> */}
                  <div className="label-newInvest-pj">โลโก้ธุรกิจ </div>
                  <BizLogo />
                  {/* <div
                    className="input-newInvest-pj"
                    style={{ height: "160px", width: "160px" }}
                    type="text"
                    name="uname"
                    required
                  ></div> */}
                </div>
                <div className="flex-col">
                  <div className="input-container">
                    <BizTextInfo title="วันเริ่มดำเนินธุรกิจ" />
                    <input
                      className="input-newInvest-pj-small"
                      type="text"
                      name="uname"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <BizTextInfo title="ระยะเวลาประเมินธุรกิจ" />

                    <input
                      className="input-newInvest-pj-small"
                      type="text"
                      name="uname"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <BizTextInfo title="สกุลเงิน" />
                    <input
                      className="input-newInvest-pj-small"
                      type="text"
                      name="uname"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <BizTextInfo title="ชั่วโมงทำงาน/วัน" />
                    <input
                      className="input-newInvest-pj-small"
                      type="text"
                      name="uname"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* part2 แนวโน้มยอดขาย*/}
              {/*  */}
            </form>

            <form>
              <div className="input-container">
                <BizTextInfo title="คำอธิบายเกี่ยวกับธุรกิจ" />
                <textarea
                  className="input-newInvest-pj"
                  style={{ height: "143px", width: "250px" }}
                  type="textarea"
                  name="uname"
                  required
                />
              </div>
              <div className="input-container">
                <BizTextInfo title="ประเภทธุรกิจ" />
                <input
                  className="input-newInvest-pj-small"
                  type="text"
                  name="pass"
                  required
                />
              </div>
              <div className="d-flex flex-col">
                <div className="input-container">
                  <BizTextInfo title="ภาษีเงินได้" />
                  <input
                    className="input-newInvest-pj-small"
                    type="text"
                    name="pass"
                    required
                  />
                </div>
                <div className="input-container">
                  <BizTextInfo title="อัตราเงินคิดลด" />
                  <input
                    className="input-newInvest-pj-small"
                    type="text"
                    name="pass"
                    required
                  />
                </div>
              </div>
              {/* <div className="button-container">
                <input className="input-newInvest-pj" type="submit" />
              </div> */}
            </form>
          </div>
          <hr></hr>
          <div>สร้างโปรเจคธุรกิจจากเทมเพลตที่มี</div>
          <div className="template-scroll">
            <div><ProjectTempleteCard /></div>
            <div><ProjectTempleteCard /></div>
            <div><ProjectTempleteCard /></div>
            <div><ProjectTempleteCard /></div>
            <div><ProjectTempleteCard /></div>
            <div><ProjectTempleteCard /></div>
            <div><ProjectTempleteCard /></div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default onClickOutside(newInvestmentProject);
