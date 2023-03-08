import React, { useState, useEffect } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import InfoProject from "../../../components/bizTools/infoProject/infoProject";

import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById } from "../../../features/projectsSlice";

function ProjectConfigPage() {

  const [config, setConfig] = useState({
    type: "project-config",
    title: "เกี่ยวกับธุรกิจ",
  })

  return (
    <div className="d-flex">
      <BizSidebar />
      <div className="">x
        <BiztoolHeader type={config.type} title={config.title} />
        <InfoProject />
      </div>
    </div>
  );
}

export default ProjectConfigPage;
