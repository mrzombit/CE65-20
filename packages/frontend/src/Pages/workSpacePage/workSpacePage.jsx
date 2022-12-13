import React from "react";
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

function workSpacePage() {
  return (
    <div className="ws">
      <p className="head-text-ws mt-4">Work Space</p>
      <hr className="line"></hr>
      <div className="d-flex mt-4">
        <div className="d-flex">
          <Bizbutton
            name="New FFC Project"
            details="Financial Feasibility Casvas"
            icon={<VscExtensions />}
            add={<VscAdd />}
          />
          <Bizbutton
            name="Compare FFC Project 0/4"
            details="Click to select FFC Project"
            icon={<VscDiff />}
          />
        </div>
        <div className="ss-group">
          <p className="ss-font-text m-2">Recent</p>
          <VscListUnordered className="ss-font-icon m-2" />
          <CiGrid41 className="ss-font-icon m-2" />
          <input
            className="form-control mr-sm-2 ss-font-search m-2"
            type="search"
            placeholder="Search"
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
  );
}

export default workSpacePage;
