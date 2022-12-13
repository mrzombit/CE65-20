import React from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";
import BizTableInvestment from "../../../Components/bizTable/bizTableInvestment";

function totalInvestmentPage() {
  return (
    <div>
      <BizSidebar />
      <div>
        <BizHeader title="Total Investment Table" infoPath="/" btnName="" />
        <BizTableInvestment name="ร้านตัดผม"/>
        <BizTableInvestment name="ทั่วไป"/>
      </div>
    </div>
  );
}

export default totalInvestmentPage;
