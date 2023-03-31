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
import InputCell from "../../../../components/investmentProject/biztoolBody/biztoolTableList/biztoolTable/biztoolCell/inputCell";

const incomeChartPage = (props) => {
  const yearRange = [1, 2, 3, 4]
  const totalRevenue = []

  const dispatch = useDispatch();
  const selectedProject = useSelector((state) => state.projects.selectedProject);
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });
  const [reload, setReload] = useState(false)

  const [newRevenuePerService, setNewRevenuePerService] = useState(null);

  useEffect(() => {
    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject._id));
      setIsLoaded({ user: true, project: true });
    }
    if (!reload) {
      dispatch(fetchProjectById(selectedProject._id))
      setReload(true)
    }
    setTableData(selectedProject.revenue)
  }, [selectedProject]);

  const [tableData, setTableData] = useState(selectedProject.revenue)
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.revenue)

  const [tableService, setTableService] = useState()
  const [service, setService] = useState()
  const [revenuePerService, setRevenuePerService] = useState()

  // const onValChange = (tableID, unitID, revenuePerUnit) => {
  //   let shallowServiceTables = JSON.parse(JSON.stringify(selectedProject.revenue.service_tables))
  //   // let shallowProductTables = JSON.parse(JSON.stringify(selectedProject.revenue.product_tables))

  //   shallowServiceTables = shallowServiceTables.map((eachTableService) => {
  //     if (eachTableService._id == tableID) {
  //       eachTableService.services.map((eachService) => {
  //         if (eachService._id == unitID)
  //           if (eachService.revenue_per_service != revenuePerUnit) {
  //             eachService.revenue_per_service = revenuePerUnit
  //           }
  //       })
  //     }
  //     return shallowServiceTables
  //   })

  //   // shallowProductTables = shallowProductTables.map()

  //   let shallowSelectedProject = {
  //     ...selectedProject,
  //     revenue: {
  //       service_tables: shallowServiceTables,
  //       // product_tables: shallowProductTables,
  //     }
  //   }
  //   dispatch(projectUpdated(shallowSelectedProject))
  //   dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
  // }

  const onValChange = (tableID, unitID, revenuePerUnit) => {
    let shallowServiceTables = JSON.parse(JSON.stringify(selectedProject.revenue.service_tables))
  
    shallowServiceTables = shallowServiceTables.map((eachTableService) => {
      if (eachTableService._id == tableID) {
        eachTableService.services = eachTableService.services.map((eachService) => {
          if (eachService._id == unitID) {
            if (eachService.revenue_per_service !== revenuePerUnit) {
              eachService.revenue_per_service = revenuePerUnit
            }
          }
          return eachService
        })
      }
      return eachTableService
    })
  
    let shallowSelectedProject = {
      ...selectedProject,
      revenue: {
        service_tables: shallowServiceTables,
      }
    }
    dispatch(projectUpdated(shallowSelectedProject))
    dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
  }
  

  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);


  function calculateRevenue_service() {
    let sum_service_revenue = 0;
    tableData.service_tables.forEach(tableService => {
      tableService.services.forEach(eachService => {
        sum_service_revenue += eachService.revenue_per_service;
      });
    });
    return sum_service_revenue;
  }

  // function calculateRevenue_product() {
  //   let sum_product_revenue = 0;
  //   if (tableData.product_tables != null) {
  //     tableData.product_tables.map((pd) => (
  //       tableService.products !== null &&
  //       pd.products.map((product) => (
  //         product.revenue_per_product != null &&
  //         (sum_product_revenue += product.revenue_per_product)
  //       ))))
  //   }
  //   return sum_product_revenue
  // }

  function calculateRevenue() {
    let totalValue = 0
    totalValue = calculateRevenue_service() + 0
    totalRevenue.push(totalValue)
    return totalValue
  }

  return (
    <div>
      <div className="d-flex">
        <BizSidebar />
        <div className={sidebar ? "p-4 chart-pages-body2" : "p-4 chart-pages-body"}>
          <StatementHearder
            title="Income Statement"
            sensitivityPath="/Sensitivity/income"
            listPath="/ProfitLossStatements"
            chartPath="/Chart/incom"
          />

          <div >
            <CombinationCharts
              total_service_revenue={totalRevenue}
            />
            <div className="d-flex flex-row justify-content-around">
              {/* <BarChart />
              <BarChart />
              <BarChart /> */}
              {/* <DoughnutChart /> */}
            </div>
          </div>
        </div>

        {/*//////////////////// sidebar ///////////////////*/}
        <div className="">
          {sidebar ? (
            //SHOW SIDEBAR (EDIT TAB)
            <div className="sen-sidebar">
              {/* <ul className='nav-menu-items' onClick={showSidebar}></ul> */}
              <div className="sen-sidebar-show" onClick={showSidebar}>
                <AiOutlineDoubleLeft />
              </div>

              {/* {yearRange.map(year => (
                <div> */}
              <div className="total-text">รายได้รวม ปีที่ { } : {calculateRevenue()}</div>
              <hr></hr>
              <div >รายได้การบริการ/วัน</div>
              <hr></hr>
              {/* {alert(JSON.stringify(tableData.service_tables))} */}
              {/* {alert(JSON.stringify(tableData.service_tables))} */}

              {
                // alert(JSON.stringify(tableData.service_tables[0].services))

                tableData.service_tables.map(tableService => (
                  <div key={tableService._id}>
                    {tableService.name}
                    {tableService.services.map(eachService => (
                      <div key={eachService._id}>
                        {eachService.name}
                        <input
                          type="text"
                          defaultValue={eachService.revenue_per_service}
                          className="chart-input"
                          onChange={(event) => onValChange(tableService._id, eachService._id, event.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                ))
                


                //  tableData.service_tables.map((tableService) => (
                //     <div key={tableService._id}>
                //       {tableService.services.map((service) => (
                //         <div key={service._id}>
                //           {service.name}
                //           {(service.name !== "" && service.revenue_per_service !== 0) &&
                //             <input
                //               type="text"
                //               defaultValue={service.revenue_per_service}
                //               className="chart-input"
                //               onChange={onValChange(tableService._id, service._id, service.revenue_per_service)}
                //             />
                //           }
                //         </div>
                //       ))}
                //     </div>
                //   ))
              }
              ===== {calculateRevenue_service()}
              <hr></hr>

              {/* <div className="">รายได้การขายสินค้า/วัน</div>
              <hr></hr>
              {tableData.product_tables != null &&
                tableData.product_tables.map((pd) => (
                  <div>
                    {pd.products.map((product) => (
                      <div>
                        {product.name}
                        {(product.name != "" && product.revenue_per_product != 0) &&
                          <input
                            type="text"
                            defaultValue={product.revenue_per_product}
                            className="chart-input"
                          onChange={onValChange}
                          />
                        }
                      </div>
                    ))}
                  </div>
                ))}
              ===== {calculateRevenue_product()}
              <hr></hr> */}



              {/* </div>
              ))} */}



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


      </div>
    </div>
  );
};

export default incomeChartPage;
