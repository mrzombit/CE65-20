import React, { useState } from "react";
import BizSidebar from "../../../Components/bizTools/bizSidebar/bizSidebar";
import "../../BizTools/biztools.css";
import BiztoolHeader from "../../../Components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../Components/investmentProject/biztoolBody/biztoolBody";

function OperationCostPage() {
  const [config, setConfig] = useState({
    type: "operation-cost",
    title: "ค่าใช้จ่ายประจำ",
    addTableHandleFunction: (input) => {
      alert("popup!")
    }
  })

  return (
    <div>
      <BizSidebar />
      <BiztoolHeader type={config.type} title={config.title} handleFunction={config.addTableHandleFunction} />
      <BiztoolBody type={config.type} />
    </div>
  );
}

export default OperationCostPage;
