import React from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";
import InfoProject from "../../../Components/infoProject/infoProject";

function ProjectConfigPage() {
  return (
    <div>
      <BizSidebar />
      <div>
        <BizHeader title="Project Configuration" infoPath="/" btnName="Save" />
        <InfoProject/>
      </div>
      
    </div>
  );
}

export default ProjectConfigPage;
