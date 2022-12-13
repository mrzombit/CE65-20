import React from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";

function ffcPage() {
  return (
    <div>
      <BizSidebar />
      <div>
        <BizHeader
          title="Financial Feasibility Canvas"
          infoPath="/"
          btnName=""
        />
      </div>
      <p>Answer the following Questions to Assess Your Financial Feasibility Canvas</p>
    </div>
  );
}

export default ffcPage;
