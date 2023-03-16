import React, { useState } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import StatementCard from "../../../components/subscription/statementCard/statementCard";
import BIZTOOL_PAGE_CONFIG from "../../bizTools/pageConfig";
import "./statementsPage.css";


function StatementsPage() {
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.statementx)

  return (
    <div className="d-flex ">
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <BiztoolHeader
          type={config.type}
          title={config.title}
        />
        <div className="statement-body">
          {/* <p className="statement-title">Your Statements</p> */}
          <div className="d-flex flex-column justify-content-center align-items-start">
            <div className="statement-block">
              <StatementCard name="Custom Statement" detail="Create you own statement" />
              <StatementCard name="Cash Flow Statement" detail="Create you Cash Flow statement" />
              <StatementCard name="Profit & Loss Statement" detail="Create you Profit & Loss statement" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatementsPage

