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


const incomeChartPage = () => {

  let total_service_revenue = 0;
  const [totalServiceRevenue, setTotalServiceRevenue] = useState()

  function sum_service_revenue(x) {
    total_service_revenue += x
    // return setTotalServiceRevenue(total_service_revenue)
  }

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


  return (
    <div>
      <div className="d-flex">
        <BizSidebar />


        {/*//////////////////// sidebar ///////////////////*/}
        <div className="d-flex justify-content-end">
          {sidebar ? (
            //SHOW SIDEBAR (EDIT TAB)
            <div className="sen-sidebar">
              {/* <ul className='nav-menu-items' onClick={showSidebar}></ul> */}
              <div className="sen-sidebar-show" onClick={showSidebar}>
                <AiOutlineDoubleLeft />
              </div>
              รายได้การบริการ/วัน
              <hr></hr>
              {/* {alert(JSON.stringify(tableData.service_tables))} */}
              {/* {alert(JSON.stringify(tableData.service_tables))} */}
              {tableData.service_tables.map((pd) => (
                <div>

                  {pd.services.map((service) => (
                    <div>
                      <div>
                        {service.name}
                        {(service.name !== "" && service.revenue_per_service !== 0) &&
                          <input value={service.revenue_per_service} className="chart-input" />}
                        {sum_service_revenue(service.revenue_per_service)}

                      </div>
                    </div>
                  )
                  )}

                  {/* {setTotalServiceRevenue(total_service_revenue)} */}


                </div>

              ))}
              ====={total_service_revenue}

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
        {/* //////////////////////////// */}

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
            {console.log(total_service_revenue)}
            <CombinationCharts
              total_service_revenue={total_service_revenue}
            />
            <div className="d-flex flex-row justify-content-around">
              {/* <BarChart />
              <BarChart />
              <BarChart /> */}
              {/* <DoughnutChart /> */}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default incomeChartPage;
