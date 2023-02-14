import React, { useState } from "react";
import "./newInvestmentProject.css";
import onClickOutside from "react-onclickoutside";
import BizTextInfo from "../bizTextInfo/bizTextInfo";
import { AiOutlineClose } from "react-icons/ai";
import BizLogo from "../bizLogo/bizLogo";
import ProjectTempleteCard from "../projectTempleteCard/projectTempleteCard";
import { VscChevronRight } from "react-icons/vsc";
import AddProjectForm from "../../Features/projects/AddProjectForm";

function newInvestmentProject(props) {
  return props.trigger ? (
    <div className="popup-overlay">
      <div className="new-pj-card">
        <div className="d-flex flex-col align-items-center justify-content-between">
          <BizTextInfo title="สร้างโปรเจคธุรกิจใหม่" />
          <AiOutlineClose onClick={props.close} />
        </div>
        <hr></hr>
        <AddProjectForm/>
        
      </div>
    </div>
  ) : null;
}

export default onClickOutside(newInvestmentProject);
