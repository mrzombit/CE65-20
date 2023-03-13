import React, { useState } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import BiztoolBody from "../../../components/investmentProject/biztoolBody/biztoolBody";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import '../biztools.css'
import BIZTOOL_PAGE_CONFIG from "../pageConfig";
import BIZTOOL_PAGE_MOCKDATA from "../pageMockData";

function RevenuePage() {

  const [tableData, setTableData] = useState(BIZTOOL_PAGE_MOCKDATA.revenue.data)
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
