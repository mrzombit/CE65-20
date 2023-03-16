import React, { useState } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../components/investmentProject/biztoolBody/biztoolBody";
import BIZTOOL_PAGE_CONFIG from "../pageConfig";
import { useSelector } from "react-redux";

function MiscellaneousPage() {
  const selectedProject = useSelector(state => state.projects.selectedProject)
  const [tableData, setTableData] = useState(selectedProject.miscellaneous)
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.miscellaneous)

  return (
    <div className="d-flex ">
      <BizSidebar />
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
      </div>
    </div>
  );
}

export default MiscellaneousPage;
