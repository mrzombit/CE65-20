import React, { useState, useEffect, useRef } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import BiztoolBody from "../../../components/investmentProject/biztoolBody/biztoolBody";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import '../biztools.css'
import BIZTOOL_PAGE_CONFIG from "../pageConfig";

import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById } from "../../../features/projectsSlice";

function RevenuePage() {
  const dispatch = useDispatch();
  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });

  useEffect(() => {
    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject));
      setIsLoaded({ user: true, project: true });
    }
  }, []);
  // console.log(JSON.stringify(selectedProject));
  const [tableData, setTableData] = useState(selectedProject.revenue)
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.revenue)

  return (
    <div className="d-flex ">
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <BiztoolHeader
          type={config.type}
          title={config.title}          
        />
        <BiztoolBody
          type={config.type}
          tableStyle={config.tableStyle}
          tableData={tableData}
          onChangeHandle={config.onChangeHandle}
          handleFunction={config.addTableHandleFunction}
        />
      </div>
    </div>
  );
}

export default RevenuePage;