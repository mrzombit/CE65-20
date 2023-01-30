import React from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";
import BizTableInvestment from "../../../Components/bizTable/bizTableInvestment";
import "../../BizTools/biztools.css";

function OperationCostPage() {
  return (
    <div>
      <BizSidebar />  

      <BizHeader title="Operation Cost Table" infoPath="/" btnName="" />
      <div className="m-bt">
        <BizTableInvestment name="เงินเดือน" />
        <BizTableInvestment name="ค่าใช้จ่ายรายเดือน" />
      </div>
    </div>
  );
}

export default OperationCostPage;
