import React, { useState } from "react";
import BizSidebar from "../../../Components/bizTools/bizSidebar/bizSidebar";
import "../biztools.css";
import BiztoolHeader from "../../../Components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../Components/investmentProject/biztoolBody/biztoolBody";

function TotalInvestmentPage() {
  const [config, setConfig] = useState({
    type: "total-investment",
    title: "ต้นทุนธุรกิจ",
    addTableHandleFunction: (input) => {
      alert("popup!")
    }
  })

  return (
    <div>
      <BizSidebar />
      <BiztoolHeader
        type={config.type}
        title={config.title}
        handleFunction={config.addTableHandleFunction}
      />
      <BiztoolBody type={config.type} />
    </div>
  );
}

export default TotalInvestmentPage;
