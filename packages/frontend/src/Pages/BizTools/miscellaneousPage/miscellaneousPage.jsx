import React, { useState } from "react";
import BizSidebar from "../../../Components/bizTools/bizSidebar/bizSidebar";
import BiztoolHeader from "../../../Components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../Components/investmentProject/biztoolBody/biztoolBody";

function MiscellaneousPage() {
  const [config, setConfig] = useState({
    type: "miscellaneous",
    title: "เงินกู้และหุ้นส่วน",
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

export default MiscellaneousPage;
