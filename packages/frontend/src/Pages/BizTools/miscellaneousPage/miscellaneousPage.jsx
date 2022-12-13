import React from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";
import BizTableInvestment from "../../../Components/bizTable/bizTableInvestment";

function miscellaneousPage() {
  return (
    <div>
      <BizSidebar />
      <div>
        <BizHeader title="Miscellaneous Table" infoPath="/" btnName="" />
        <BizTableInvestment name="Equity Contribution"/>
        <BizTableInvestment name="Equity Repayment"/>
        <BizTableInvestment name="Debt Issuance & Repayment"/>

      </div>
    </div>
  );
}

export default miscellaneousPage;
