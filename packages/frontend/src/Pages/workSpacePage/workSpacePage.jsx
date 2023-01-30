/* eslint-disable no-undef */
import React, { useState } from "react";
import "./workSpacePage.css";
import Bizbutton from "../../Components/bizButton/bizButton";
import {
  VscAdd,
  VscListUnordered,
  VscDiff,
  VscExtensions,
  VscListSelection,
} from "react-icons/vsc";
import { CiGrid41 } from "react-icons/ci";
import ProjectCard from "../../Components/projectCard/projectCard";
import { Link } from "react-router-dom";
import NewInvestmentProject from "../../Components/newInvestmentProject/newInvestmentProject";

function WorkSpacePage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newProjectPopupState, setNewProjectPopupState] = useState(false);
  return (
    <div>
      <NewInvestmentProject
        trigger={newProjectPopupState}
        close={() => setNewProjectPopupState(false)}
      ></NewInvestmentProject>
      <div className="ws">
        <p className="head-text-ws mt-4">ธุรกิจของฉัน</p>
        <hr className="line"></hr>
        <div className="d-flex mt-4">
          <div className="d-flex">
            {/* <Link to="/NewInvestmentProject" className="no-text-link"> */}
            <Bizbutton
              onClick={() => setNewProjectPopupState(true)}
              name="สร้างโปรเจกธุรกิจใหม่"
              details="ประเมินความเป็นไปได้ของธุรกิจของคุณ"
              icon={<VscExtensions />}
              add={<VscAdd />}
            />

            {/* </Link> */}
            <Bizbutton
              name="เปรียบเทียบระหว่างธุรกิจ 0/4"
              details="เปรียบเทียบความน่าลงทุนระหว่างธุรกิจ"
              icon={<VscDiff />}
            />
          </div>
          <div className="ss-group">
            <p className="ss-font-text m-2">ล่าสุด</p>
            <VscListUnordered className="ss-font-icon m-2" />
            <CiGrid41 className="ss-font-icon m-2" />
            <input
              className="form-control mr-sm-2 ss-font-search m-2 ss-font-text"
              type="search"
              placeholder="ค้นหา"
              aria-label="Search"
            />
            <VscListSelection className="ss-font-icon m-2" />
          </div>
        </div>
        <div className="d-flex my-3">
          <Link to="/ProjectConfig" className="no-text-link">
            <ProjectCard name="Pet Shop" lastEdit="Edited 2 hours ago" />
          </Link>

          <ProjectCard name="My Cafe" lastEdit="Edited 2 hours ago" />
          <ProjectCard name="Hotel Del Lu Na" lastEdit="Edited 2 hours ago" />
        </div>
      </div>
    </div>
  );
}

export default WorkSpacePage;
