import React from "react";
import BizSidebar from "../../../Components/bizTools/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizTools/bizHeader/bizHeader";
import StatementCard from "../../../Components/subscription/statementCard/statementCard";
import "./statementsPage.css";


function StatementsPage() {

  return (
    <div>
      <BizSidebar />
      <div>
        <BizHeader title="Statements" infoPath="/" btnName="New" />
        <div className="statement-body">
          {/* <p className="statement-title">Your Statements</p> */}
          <div className="d-flex flex-column justify-content-center align-items-start">
            <div className="statement-block">
              <StatementCard name="Custom Statement" detail="Create you own statement"/>
              <StatementCard name="Cash Flow Statement" detail="Create you Cash Flow statement"/>
              <StatementCard name="Profit & Loss Statement" detail="Create you Profit & Loss statement"/>          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatementsPage

