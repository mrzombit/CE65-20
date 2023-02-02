import React from "react";
import "./subscriptionUserBanner.css";

function subscriptionUserBanner() {
  return (
    <div className="subscript-banner">
      <div className="t-box">
        <div>Your Subscription Plan</div>
        <div>Free trial</div>
      </div>
      <div className="t-box2">
        <div>
          <div>Payment</div>
          <div></div>
          <div>Next Billing is on 10 Oct 2022</div>
          <div>Update</div>
        </div>
      </div>
    </div>
  );
}

export default subscriptionUserBanner;
