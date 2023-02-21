import React from "react";
import BizSidebarProfile from "../../Components/bizTools/bizSidebarProfile/bizSidebarProfile";
import SubscriptionUserBanner from "../../Components/subscription/subscriptionUserBanner/subscriptionUserBanner";
import "./subscriptionPage.css";
import SubPlan from "../../Components/subscription/subPlan/subPlan";

function subscriptionPage() {
  return (
    <div>
      <BizSidebarProfile />
      <div className="">
        <div className="biz-content-subscript">
          <SubscriptionUserBanner />
          <div className="d-flex m-3">
            <div className="m-4"><SubPlan /></div>
            <div className="m-4"><SubPlan /></div>
            <div className="m-4"><SubPlan /></div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default subscriptionPage;
