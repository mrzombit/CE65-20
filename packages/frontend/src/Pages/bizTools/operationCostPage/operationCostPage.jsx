import React, { useState } from "react";
import BizSidebar from "../../../Components/bizTools/bizSidebar/bizSidebar";
import "../biztools.css";
import BiztoolHeader from "../../../Components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../Components/investmentProject/biztoolBody/biztoolBody";
import BIZTOOL_PAGE_CONFIG from "../pageConfig";
import BIZTOOL_PAGE_MOCKDATA from "../pageMockData";

function OperationCostPage() {

  const [tableData, setData] = useState(BIZTOOL_PAGE_MOCKDATA.operationCost.data)
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.operationCost)

  return (
    <div className="d-flex">
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

export default OperationCostPage;
