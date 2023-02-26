import React, { useState } from "react";
import BizSidebar from "../../../Components/bizTools/bizSidebar/bizSidebar";
import BiztoolHeader from "../../../Components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../Components/investmentProject/biztoolBody/biztoolBody";
import BIZTOOL_PAGE_MOCKDATA from "../pageMockData";
import BIZTOOL_PAGE_CONFIG from "../pageConfig";

function MiscellaneousPage() {

  const [tableData, setTableData] = useState(BIZTOOL_PAGE_MOCKDATA.miscellaneous.data)
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
