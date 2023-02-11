import React from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";
import BizTableInvestment from "../../../Components/bizTable/bizTableInvestment";
import "../../BizTools/biztools.css";

function TotalInvestmentPage() {
  return (
    <div>
      <BizSidebar />
      <BizHeader title="Total Investment Table" infoPath="/" btnName="" />
      <div className="m-bt">
        <BizTableInvestment name="ร้านตัดผม" />
        {/* <BizTableInvestment name="ทั่วไป" /> */}
      </div>
    </div>
  );
}

export default TotalInvestmentPage;
