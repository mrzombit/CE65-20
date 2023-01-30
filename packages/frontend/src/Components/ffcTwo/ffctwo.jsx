import React from "react";
import TitleFFC from "../titleFFC/titleFFC";
import "../ffcOne/ffcOne.css";
import BizTableInvestment from "../bizTable/bizTableInvestment";

function ffctwo() {
  return (
    <div className="ffc-content">
      <div className="ffc-body-content">
        <div>
          <div className="tab-head-content">
            <TitleFFC title="การลงทุน" />
          </div>
             <div ><BizTableInvestment /> </div>
        </div>
      </div>
    </div>
  );
}

export default ffctwo;
