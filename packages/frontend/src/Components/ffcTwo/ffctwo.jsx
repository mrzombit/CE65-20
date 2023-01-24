import React from 'react'
import TitleFFC from "../titleFFC/titleFFC";
import "../ffcOne/ffcOne.css";
import BizTableInvestment from '../bizTable/bizTableInvestment';

function ffctwo() {
  return (
    <div className="ffc-body-text">
      <div className="ffc-body">
        <div>
          <div><TitleFFC title="การลงทุน" /></div>
          <div><BizTableInvestment/></div>
        </div>
      </div>
    </div>
  )
}

export default ffctwo