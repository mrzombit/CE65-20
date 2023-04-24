import React, { useEffect, useState } from "react";
import CombinationCharts from "../../../../components/statement/charts/combinationCharts";
import BizSidebar from "../../../../components/bizTools/bizSidebar/bizSidebar";
import StatementHearder from "../../../../components/statement/statementHearder";
import "./chartPages.css";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import "./../../../../components/sensitivity/sensitivityEdit/sidebar/sensitivityEditSidebar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjectById,
  projectUpdated,
  updateProject,
} from "../../../../features/projectsSlice";
import EditInputOnSidebar from "../../../../components/checkbiz/sidebarEditdata/editInputOnSidebar";

// import BarChart from "../../../../components/statement/charts/barChart";
// import * as cbf from "../../../../components/checkbiz/checkbizFormula/checkbizFormula_try";
// import CombinationChartsMinMax from "../../../../components/statement/charts/combinationChartsMinMax";
// import StackedBar from "../../../../components/statement/charts/stackedBar";
// import DoughnutChart from "../../../../components/statement/charts/doughnutChart";
// import SensitivityEditSidebar from "../../../../components/sensitivity/sensitivityEdit/sidebar/sensitivityEditSidebar";
// import BIZTOOL_PAGE_CONFIG from "../../../bizTools/pageConfig";

const incomeChartPage = (props) => {

  // const [newRevenuePerService, setNewRevenuePerService] = useState(null);
  // const config = BIZTOOL_PAGE_CONFIG.revenue
  // const [tableService, setTableService] = useState();
  // const [service, setService] = useState();
  // const [revenuePerService, setRevenuePerService] = useState();
  // const [message, setMessage] = useState("");

  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  //   console.log("value is:", event.target.value);
  // };

  const yearRange = [];

  // const totalRevenue = [15000,17000,15000];
  // const totalFixedCost = [17000,15000,10000];
  const totalRevenue = [];
  const totalFixedCost = [];

  const totalRevenue_MIN = [];
  const totalFixedCost_MIN = [];
  // const totalIncome = [];
  // const totalIncome = totalRevenue.map((revenue, index) => revenue - totalFixedCost[index]);

  const dispatch = useDispatch();
  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });
  const [reload, setReload] = useState(false);



  useEffect(() => {

    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject._id));
      setIsLoaded({ user: true, project: true });
    }
    if (!reload) {
      dispatch(fetchProjectById(selectedProject._id));
      setReload(true);
    }
    setModelConfig(selectedProject.model_config);
    setTableRevenueData(selectedProject.revenue);
    setTableExpenseData(selectedProject.expense);
  }, [selectedProject]);

  const [modelConfig, setModelConfig] = useState(
    selectedProject.model_config
  );
  const [tableRevenueData, setTableRevenueData] = useState(
    selectedProject.revenue
  );
  const [tableExpenseData, setTableExpenseData] = useState(
    selectedProject.expense
  );

  const onValChange = (tableID, unitID, amountPerUnit) => {
    let shallowServiceTables = JSON.parse(
      JSON.stringify(selectedProject.revenue.service_tables)
    );
    let shallowProductTables = JSON.parse(
      JSON.stringify(selectedProject.revenue.product_tables)
    );
    let shallowFixedCostTables = JSON.parse(
      JSON.stringify(selectedProject.expense.fixed_cost_tables)
    );
    let shallowInvestmentTables = JSON.parse(
      JSON.stringify(selectedProject.expense.investment_tables)
    );

    shallowServiceTables = shallowServiceTables.map((eachTableService) => {
      if (eachTableService._id === tableID) {
        eachTableService.services = eachTableService.services.map(
          (eachService) => {
            if (eachService._id === unitID) {
              if (eachService.revenue_per_service !== amountPerUnit) {
                eachService.revenue_per_service = amountPerUnit;
              }
            }
            return eachService;
          }
        );
      }
      return eachTableService;
    });

    shallowProductTables = shallowProductTables.map((eachTableProduct) => {
      if (eachTableProduct._id === tableID) {
        eachTableProduct.products = eachTableProduct.products.map(
          (eachProduct) => {
            if (eachProduct._id === unitID) {
              if (eachProduct.revenue_per_unit !== amountPerUnit) {
                eachProduct.revenue_per_unit = amountPerUnit;
              }
            }
            return eachProduct;
          }
        );
      }
      return eachTableProduct;
    });

    shallowFixedCostTables = shallowFixedCostTables.map(
      (eachTableFixedCost) => {
        if (eachTableFixedCost._id === tableID) {
          eachTableFixedCost.fixed_costs = eachTableFixedCost.fixed_costs.map(
            (eachFixedCost) => {
              if (eachFixedCost._id === unitID) {
                if (eachFixedCost.amount !== amountPerUnit) {
                  eachFixedCost.amount = amountPerUnit;
                }
              }
              return eachFixedCost;
            }
          );
        }
        return eachTableFixedCost;
      }
    );

    // shallowInvestmentTables = shallowInvestmentTables.map(
    //   (eachTableInvestment) => {
    //     if (eachTableInvestment._id === tableID) {
    //       eachTableInvestment.investments = eachTableInvestment.investments.map(
    //         (eachInvestment) => {
    //           if (eachInvestment._id === unitID) {
    //             if (eachInvestment.amount !== amountPerUnit) {
    //               eachInvestment.amount = amountPerUnit;
    //             }
    //           }
    //           return eachInvestment;
    //         }
    //       );
    //     }
    //     return eachTableInvestment;
    //   }
    // );

    // Find the index of the table with the matching ID
    const tableIndex = shallowInvestmentTables.findIndex((table) => table._id === tableID);

    // Update the investment table if found
    if (tableIndex !== -1) {
      shallowInvestmentTables[tableIndex] = {
        ...shallowInvestmentTables[tableIndex],
        investments: shallowInvestmentTables[tableIndex].investments.map((eachInvestment) => {
          if (eachInvestment._id === unitID) {
            if (eachInvestment.amount !== amountPerUnit) {
              eachInvestment.amount = amountPerUnit;
            }
          }
          return eachInvestment;
        }),
      };
    }



    let shallowSelectedProject = {
      ...selectedProject,
      revenue: {
        service_tables: shallowServiceTables,
        product_tables: shallowProductTables,
      },
      expense: {
        fixed_cost_tables: shallowFixedCostTables,
        investment_tables: shallowInvestmentTables,
      },
    };
    dispatch(projectUpdated(shallowSelectedProject));
    dispatch(
      updateProject({ id: selectedProject._id, data: shallowSelectedProject })
    );
  };

  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  function calculateRevenue_service() {
    let sum_service_revenue = 0;
    tableRevenueData.service_tables.forEach((tableService) => {
      tableService.services.forEach((eachService) => {
        sum_service_revenue += eachService.revenue_per_service;
      });
    });
    // return sum_service_revenue;
  }
  function calculateRevenue_product() {
    let sum_product_revenue = 0;
    tableRevenueData.product_tables.forEach((tableProduct) => {
      tableProduct.products.forEach((eachProduct) => {
        sum_product_revenue += eachProduct.revenue_per_unit;
      });
    });
    // return sum_product_revenue;
  }

  // function calculateRevenue() {
  //   let totalValue = 0;
  //   let sum_product_revenue = 0;
  //   let sum_service_revenue = 0;
  //   tableRevenueData.product_tables.forEach((tableProduct) => {
  //     tableProduct.products.forEach((eachProduct) => {
  //       sum_product_revenue += eachProduct.revenue_per_unit;
  //     });
  //     tableRevenueData.service_tables.forEach((tableService) => {
  //       tableService.services.forEach((eachService) => {
  //         sum_service_revenue += (eachService.revenue_per_service - (eachService.revenue_per_service * eachService.cost_per_service / 100));
  //       });
  //     });
  //   });
  //   totalValue = sum_product_revenue + sum_service_revenue

  //   totalRevenue.push(totalValue);
  //   for (let i = 1; i < modelConfig.projection_period; i++) {
  //     // totalValue += totalValue*(increase / 100)
  //     // increase += increase
  //     totalRevenue.push(totalValue);
  //   }

  //   return totalValue;
  // }

  function calculateYearRange() {
    // modelConfig.projection_period
    let yearStart = parseInt(modelConfig.start_date.slice(0, 4));
    for (let i = 0; i < modelConfig.projection_period; i++) {
      yearRange.push(yearStart);
      yearStart += 1;
    }
  }

  function calculateRevenue() {
    let totalValue = 0;
    let totalValue_MIN = 0;

    let sum_product_revenue = 0; //max
    let sum_product_revenue_MIN = 0;

    let sum_service_revenue = 0;
    let sum_service_revenue_MIN = 0;

    tableRevenueData.product_tables.forEach((tableProduct) => {
      tableProduct.products.forEach((eachProduct) => {
        if (eachProduct.revenue_per_unit && typeof eachProduct.revenue_per_unit === "string") {
          if (eachProduct.revenue_per_unit.includes("-")) {
            let [min, max] = eachProduct.revenue_per_unit.split("-").map(Number);
            sum_product_revenue += max
            sum_product_revenue_MIN += min
            console.log("G")
          } else {
            sum_product_revenue += eachProduct.revenue_per_unit
            sum_product_revenue_MIN += eachProduct.revenue_per_unit
          }
        }
      });
    });
    tableRevenueData.service_tables.forEach((tableService) => {
      tableService.services.forEach((eachService) => {

        sum_service_revenue += (eachService.revenue_per_service - (eachService.revenue_per_service * eachService.cost_per_service / 100));
        // if (eachService.revenue_per_service && typeof eachService.revenue_per_service === "string") {
        //   if (eachService.revenue_per_service.includes("-")) {
        //     // let [min, max] = eachProduct.revenue_per_unit.split("-").map(Number);
        //     // sum_product_revenue += max
        //     // sum_product_revenue_MIN += min
        //     console.log("GG")
        //   } else {
        //     sum_service_revenue += eachService.revenue_per_service
        //     sum_service_revenue_MIN += eachService.revenue_per_service
        //   }
        // }

      });
    });

    totalValue = sum_product_revenue + sum_service_revenue
    totalValue_MIN = sum_product_revenue_MIN + sum_service_revenue

    totalRevenue.push(totalValue);
    totalRevenue_MIN.push(totalValue_MIN);

    for (let i = 1; i < modelConfig.projection_period; i++) {
      // totalValue += totalValue*(increase / 100)
      // increase += increase
      totalRevenue.push(totalValue);
      totalRevenue_MIN.push(totalValue_MIN);
    }

    // return totalValue;
  }



  function calculateFixedCost() {
    let sum_fixed_cost = 0;
    tableExpenseData.fixed_cost_tables.forEach((tableFixedCost) => {
      tableFixedCost.fixed_costs.forEach((eachFixedCost) => {
        sum_fixed_cost += eachFixedCost.amount;
      });
    });
    // return sum_fixed_cost;
  }

  function calculateTotalFixdcost() {
    let sum_fixed_cost = 0;
    let sum_investment = 0;
    let increase = 0;
    // modelConfig.projection_period

    tableExpenseData.fixed_cost_tables.forEach((tableFixedCost) => {
      tableFixedCost.fixed_costs.forEach((eachFixedCost) => {
        sum_fixed_cost += eachFixedCost.amount;
        increase = eachFixedCost.cost_increase
      });
    });

    tableExpenseData.investment_tables.forEach((table) => {
      table.investments.forEach((eachData) => {
        sum_investment += eachData.amount
      })
    })

    // ปีแรก
    // totalFixedCost.push(sum_fixed_cost + sum_investment);
    totalFixedCost.push(sum_fixed_cost);

    for (let i = 1; i < modelConfig.projection_period; i++) {
      sum_fixed_cost += sum_fixed_cost * (increase / 100)
      increase += increase
      totalFixedCost.push(sum_fixed_cost);
    }
    // return sum_fixed_cost
  }

  // function netIncome() {
  //   return totalRevenue.map((revenue, index) => revenue - totalFixedCost[index]);

  // }

  return (
    <div>
      <div className="d-flex sen-sidebar-container">
        <BizSidebar />
        <div
          className={sidebar ? "p-4 chart-pages-body2" : "p-4 chart-pages-body"}
        >
          <StatementHearder
            title="Income Statement"
            type="chart"
            sensitivityPath="/Sensitivity/income"
            listPath="/ProfitLossStatements"
            chartPath="/Chart/incom"
          />
          <div>
            <div>{calculateYearRange()}</div>
            <CombinationCharts
              data_type="income"
              totalRevenue={totalRevenue}
              total_fixed_cost={totalFixedCost}
              totalRevenue_MIN={totalRevenue_MIN}
              yearRange={yearRange}
            />
            {console.log("totalFixedCost : " + totalFixedCost)}
          </div>
        </div>

        <div className="">
          {sidebar ? (
            <div className="sen-sidebar">
              <div className="sen-sidebar-show" onClick={showSidebar}>
                {/* <AiOutlineDoubleLeft /> */}
              </div>

              
              
              <div className="total-text">
                <div className="d-flex justify-content-between">
                  <div>รายได้รวม</div>
                  <div>
                    {calculateRevenue_service() + calculateRevenue_product()}
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>รายจ่ายรวม</div>
                  <div>{calculateTotalFixdcost()}</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>สุทธิ</div>
                  <div>{calculateRevenue() - calculateFixedCost()}</div>
                </div>
              </div>


              <div className="table-name-side-text">รายได้การบริการ/วัน</div>
              <div className="">
                <div>
                  <EditInputOnSidebar
                    name="รวมรายได้จากการบริการ/วัน"
                    type="text"
                    defaultValue={calculateRevenue_service()}
                    className="chart-input"
                    resultDisplay={true}
                  />
                </div>
              </div>
              {tableRevenueData.service_tables.map((tableService) => (
                <div key={tableService._id}>
                  {/* <div className="total-text">{tableService.name}</div> */}
                  {tableService.services.map((eachService) => (
                    <div key={eachService._id}>
                      {eachService.name !== "" && (
                        <EditInputOnSidebar
                          name={eachService.name}
                          type="text"
                          defaultValue={eachService.revenue_per_service}
                          className="chart-input"
                          onChange={(event) =>
                            onValChange(
                              tableService._id,
                              eachService._id,
                              event.target.value
                            )
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}


              <div className="table-name-side-text">
                รายได้การขายสินค้า/วัน
              </div>
              <EditInputOnSidebar
                name="รวมรายได้จากการขายสินค้า/วัน"
                type="text"
                defaultValue={calculateRevenue_product()}
                className="chart-input"
                resultDisplay={true}
              />
              {tableRevenueData.product_tables.map((tableProduct) => (
                <div key={tableProduct._id}>
                  {/* <div className="total-text">{tableProduct.name}</div> */}
                  {tableProduct.products.map((eachProduct) => (
                    <div key={eachProduct._id}>
                      {eachProduct.name !== "" && (
                        <EditInputOnSidebar
                          name={eachProduct.name}
                          type="text"
                          defaultValue={eachProduct.revenue_per_unit}
                          className="chart-input"
                          onChange={(event) =>
                            onValChange(
                              tableProduct._id,
                              eachProduct._id,
                              event.target.value
                            )
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}


              <div className="table-name-side-text">รายจ่าย/วัน</div>
              <EditInputOnSidebar
                name="รวมรายจ่าย"
                type="text"
                defaultValue={calculateFixedCost()}
                className="chart-input"
                resultDisplay={true}
              />
              {tableExpenseData.fixed_cost_tables.map((tableFixedCost) => (
                <div key={tableFixedCost._id}>
                  {/* <div className="total-text">{tableFixedCost.name}</div> */}
                  {tableFixedCost.fixed_costs.map((eachFixedCost) => (
                    <div key={eachFixedCost._id}>
                      {eachFixedCost.name !== "" && (
                        <EditInputOnSidebar
                          name={eachFixedCost.name}
                          type="text"
                          defaultValue={eachFixedCost.amount}
                          className="chart-input"
                          onChange={(event) =>
                            onValChange(
                              tableFixedCost._id,
                              eachFixedCost._id,
                              event.target.value
                            )
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}

            </div>
          ) : (
            <div className="sen-sidebar2">
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
