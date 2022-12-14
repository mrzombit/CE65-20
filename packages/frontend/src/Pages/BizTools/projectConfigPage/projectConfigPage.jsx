import React from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";

function projectConfigPage() {
  return (
    <div>
      <BizSidebar />
      <div>
        <BizHeader title="Project Configuration" infoPath="/" btnName="Save" />
      </div>
    </div>
  );
}

export default projectConfigPage;
