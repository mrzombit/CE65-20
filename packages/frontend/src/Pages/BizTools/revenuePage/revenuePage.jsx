import React from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";
import BizTableInvestment from "../../../Components/bizTable/bizTableInvestment";

function RevenuePage() {
  return (
    <div>
      <BizSidebar />
      <div>
        <BizHeader title="Revenue Table" infoPath="/" btnName="" />
        <BizTableInvestment name="ค่าบริการ"/>
      </div>
    </div>
  );
}

export default RevenuePage;
