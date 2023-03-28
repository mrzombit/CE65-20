import React, { useEffect, useState } from "react";
import BarChart from "../../../../components/statement/charts/barChart";
import CombinationCharts from "../../../../components/statement/charts/combinationCharts";
import DoughnutChart from "../../../../components/statement/charts/doughnutChart";
import BizSidebar from "../../../../components/bizTools/bizSidebar/bizSidebar";
import StatementHearder from "../../../../components/statement/statementHearder";
import "./chartPages.css";
import SensitivityEditSidebar from "../../../../components/sensitivity/sensitivityEdit/sidebar/sensitivityEditSidebar";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import "./../../../../components/sensitivity/sensitivityEdit/sidebar/sensitivityEditSidebar.css";

const cashflowChartPage = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="d-flex">
        <BizSidebar />
        <div
          className={sidebar ? "p-4 chart-pages-body2" : "p-4 chart-pages-body"}
        >
          <StatementHearder
            title="Cash Flow Statement"
            sensitivityPath="/Sensitivity/cashflow"
            listPath="/CashFlowStatements"
            chartPath="/Chart/cashflow"
          />
          <div >
            <CombinationCharts />
            <div className="d-flex flex-row justify-content-around">
              {/* <BarChart />
              <BarChart />
              <BarChart /> */}
              {/* <DoughnutChart /> */}
            </div>
          </div>
        </div>
        {/* sidebar */}
        <div className="d-flex justify-content-end">
          {sidebar ? (
            <div className="sen-sidebar">
              {/* <ul className='nav-menu-items' onClick={showSidebar}></ul> */}
              <div className="sen-sidebar-show" onClick={showSidebar}>
                <AiOutlineDoubleLeft />
              </div>
            </div>
          ) : (
            <div className="sen-sidebar2">
              {/* <ul className='nav-menu-items' onClick={showSidebar}></ul> */}
              <div className="sen-sidebar-show2" onClick={showSidebar}>
                <AiOutlineDoubleLeft />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default cashflowChartPage;
