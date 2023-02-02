import React from "react";
import BizSidebarProfile from "../../Components/bizSidebarProfile/bizSidebarProfile";
import SubscriptionUserBanner from "../../Components/subscriptionUserBanner/subscriptionUserBanner";
import "./subscriptionPage.css";

function subscriptionPage() {
  return (
    <div>
      <BizSidebarProfile />
      <div className="">
        <div className="biz-content-subscript">
          <SubscriptionUserBanner/>          
        </div>
      </div>
    </div>
  );
}

export default subscriptionPage;
