import React from "react";
import TitleFFC from "../titleFFC/titleFFC";
import "../ffcOne/ffcOne.css";
import BizTableInvestment from "../../bizTools/bizTable/bizTableInvestment";
import FFCCard from "../ffcCard/ffcCard";
import FFCHeadCard from "../ffcCard/ffcHeadCard";
import "../ffcCard/ffcCard.css"

function ffcFour() {
  return (
    <div className="ffc-content">
      <div className="ffc-body-content">
        <div>
          <div className="text-title-ffc">
            <TitleFFC title="กระแสเงินสด" />
          </div>
          <div className="">
            <FFCCard
              type="revenue"
              tableName="CFO"
            />
            <FFCCard
              type="expense"
              tableName="CFI"
            />
            <FFCCard
              type="expense"
              tableName="CFF"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ffcFour;
