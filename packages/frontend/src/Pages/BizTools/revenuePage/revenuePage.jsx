import React from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";
import BizTableInvestment from "../../../Components/bizTable/bizTableInvestment";
import '../../BizTools/biztools.css'

function revenuePage() {
  return (
    <div>
      <BizSidebar />
      
        <BizHeader title="Revenue Table" infoPath="/" btnName="" />
        <div className="m-bt">
        <BizTableInvestment name="ค่าบริการ"/>
      </div>
    </div>
  );
}

export default revenuePage;
