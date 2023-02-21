import React, { useState } from "react";
import BizSidebar from "../../../Components/bizTools/bizSidebar/bizSidebar";
import BiztoolBody from "../../../Components/investmentProject/biztoolBody/biztoolBody";
import BiztoolHeader from "../../../Components/investmentProject/biztoolHeader/biztoolHeader";
import '../../BizTools/biztools.css'

function RevenuePage() {
  const [config, setConfig] = useState({
    type: "revenue",
    title: "รายรับ",
    addTableHandleServiceFunction: (input) => {
      alert("service")
    },
    addTableHandleProductFunction: (input) => {
      alert("product")
    },
  })

  return (
    <div className="d-flex">
      <BizSidebar />
      <BiztoolHeader
        type={config.type}
        title={config.title}
      />
      <BiztoolBody
        type={config.type}
        handleServiceFunction={config.addTableHandleServiceFunction}
        handleProductFunction={config.addTableHandleProductFunction}
      />
    </div>
  );
}

export default RevenuePage;
