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
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById, projectUpdated, updateProject } from "../../../../features/projectsSlice";
import BIZTOOL_PAGE_CONFIG from "../../../bizTools/pageConfig";
import EditSidebarTab from "../../../../components/sensitivity/sensitivityEdit/sidebar/editSidebarDataList";


const incomeChartPage = (props) => {

  const dispatch = useDispatch();
  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });

  useEffect(() => {
    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject));
      setIsLoaded({ user: true, project: true });
    }
    setTableData(selectedProject.revenue)
  }, [selectedProject]);

  const [tableData, setTableData] = useState(selectedProject.revenue)
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.revenue)


  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  // console.log(tableData)

  return (
    <div>
      <div className="d-flex">
        <BizSidebar />
        <div
          className={sidebar ? "p-4 chart-pages-body2" : "p-4 chart-pages-body"}
        >
          <StatementHearder
            title="Income Statement"
            sensitivityPath="/Sensitivity/income"
            listPath="/ProfitLossStatements"
            chartPath="/Chart/incom"
          />
          <div >
            <CombinationCharts
              tableData={tableData}
            />
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
            //SHOW SIDEBAR (EDIT TAB)
            <div className="sen-sidebar">
              {/* <ul className='nav-menu-items' onClick={showSidebar}></ul> */}
              <div className="sen-sidebar-show" onClick={showSidebar}>
                <AiOutlineDoubleLeft />
              </div>

              <div>
                <EditSidebarTab 
                data={tableData.product_tables}
                />

                {/* {tableData.product_tables.map((data) => (
                  <>
                    <div>{data.products}</div>
                  </>
                ))} */}

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

export default incomeChartPage;
