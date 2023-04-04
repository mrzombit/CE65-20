import React from "react";
import TitleFFC from "../titleFFC/titleFFC";
import "../ffcOne/ffcOne.css";
import BizTableInvestment from "../../bizTools/bizTable/bizTableInvestment";
import FFCCard from "../ffcCard/ffcCard";
import FFCHeadCard from "../ffcCard/ffcHeadCard";
import "../ffcCard/ffcCard.css"

function ffcFive() {
  return (
    <div className="ffc-content">
    <div className="ffc-body-content">
      <div>
        <div className="text-title-ffc">
          <TitleFFC title="ผลตอบแทนทางการเงิน" />
        </div>
           <div >
           <FFCCard
              type="financial-return"
              tableName="Financial Returns"
            />
            </div>
      </div>
    </div>
  </div>
);
}


export default ffcFive