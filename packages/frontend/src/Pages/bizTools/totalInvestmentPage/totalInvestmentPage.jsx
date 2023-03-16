import React, { useState, useEffect, useRef } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import "../biztools.css";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../components/investmentProject/biztoolBody/biztoolBody";
import BIZTOOL_PAGE_CONFIG from "../pageConfig";

import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById } from "../../../features/projectsSlice";

function TotalInvestmentPage() {

  const dispatch = useDispatch();
  const selectedProject = useSelector((state) => state.projects.selectedProject);
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });

  useEffect(() => {
    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject));
      setIsLoaded({ user: true, project: true });
    }
  }, []);

  const [tableData, setTableData] = useState(selectedProject.expense.investment_tables);
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.totalInvestment);

  return (
    <div className="d-flex ">
      <BizSidebar />
      {/* {tableData.map((table) => ( */}
      <div className="p-4 biztool-body-width">
        <BiztoolHeader
          type={config.type}
          title={config.title}
          handleFunction={config.addTableHandleFunction}
        />
        <BiztoolBody
          type={config.type}
          tableStyle={config.tableStyle}
          tableData={tableData}
          onChangeHandle={config.onChangeHandle}
        />
        {/* {console.log(table.data)} */}
      </div>
      {/* ))} */}
    </div>
  );
}

export default TotalInvestmentPage;
