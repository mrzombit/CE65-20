import React, { useEffect, useState } from "react";
import BarChart from "../../../../components/statement/charts/barChart";
import CombinationCharts from "../../../../components/statement/charts/combinationCharts";
import CombinationChartsMinMax from "../../../../components/statement/charts/combinationChartsMinMax";
import StackedBar from "../../../../components/statement/charts/stackedBar";
import DoughnutChart from "../../../../components/statement/charts/doughnutChart";
import BizSidebar from "../../../../components/bizTools/bizSidebar/bizSidebar";
import StatementHearder from "../../../../components/statement/statementHearder";
import "./chartPages.css";
import SensitivityEditSidebar from "../../../../components/sensitivity/sensitivityEdit/sidebar/sensitivityEditSidebar";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import "./../../../../components/sensitivity/sensitivityEdit/sidebar/sensitivityEditSidebar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjectById,
  projectUpdated,
  updateProject,
} from "../../../../features/projectsSlice";
import BIZTOOL_PAGE_CONFIG from "../../../bizTools/pageConfig";
import EditInputOnSidebar from "../../../../components/checkbiz/sidebarEditdata/editInputOnSidebar";
import * as cbf from "../../../../components/checkbiz/checkbizFormula/checkbizFormula_try";

const incomeChartPage = (props) => {
  const yearRange = [1, 2, 3, 4];
  // const totalRevenue = [15000,17000,15000];
  // const totalFixedCost = [17000,15000,10000];
  const totalRevenue = [];
  const totalFixedCost = [];

  const dispatch = useDispatch();
  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });
  const [reload, setReload] = useState(false);

  const [newRevenuePerService, setNewRevenuePerService] = useState(null);

  useEffect(() => {
    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject._id));
      setIsLoaded({ user: true, project: true });
    }
    if (!reload) {
      dispatch(fetchProjectById(selectedProject._id));
      setReload(true);
    }
    setTableRevenueData(selectedProject.revenue);
    setTableExpenseData(selectedProject.expense);
  }, [selectedProject]);

  const [tableRevenueData, setTableRevenueData] = useState(
    selectedProject.revenue
  );
  const [tableExpenseData, setTableExpenseData] = useState(
    selectedProject.expense
  );
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.revenue);

  const [tableService, setTableService] = useState();
  const [service, setService] = useState();
  const [revenuePerService, setRevenuePerService] = useState();

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

    shallowServiceTables = shallowServiceTables.map((eachTableService) => {
      if (eachTableService._id == tableID) {
        eachTableService.services = eachTableService.services.map(
          (eachService) => {
            if (eachService._id == unitID) {
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
      if (eachTableProduct._id == tableID) {
        eachTableProduct.products = eachTableProduct.products.map(
          (eachProduct) => {
            if (eachProduct._id == unitID) {
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
        if (eachTableFixedCost._id == tableID) {
          eachTableFixedCost.fixed_costs = eachTableFixedCost.fixed_costs.map(
            (eachFixedCost) => {
              if (eachFixedCost._id == unitID) {
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

    let shallowSelectedProject = {
      ...selectedProject,
      revenue: {
        service_tables: shallowServiceTables,
        product_tables: shallowProductTables,
      },
      expense: {
        fixed_cost_tables: shallowFixedCostTables,
      },
    };
    dispatch(projectUpdated(shallowSelectedProject));
    dispatch(
      updateProject({ id: selectedProject._id, data: shallowSelectedProject })
    );
  };

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
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
    return sum_service_revenue;
  }
  function calculateRevenue_product() {
    let sum_product_revenue = 0;
    tableRevenueData.product_tables.forEach((tableProduct) => {
      tableProduct.products.forEach((eachProduct) => {
        sum_product_revenue += eachProduct.revenue_per_unit;
      });
    });
    return sum_product_revenue;
  }

  function calculateRevenue() {
    let totalValue = 0;
    totalValue = calculateRevenue_service() + calculateRevenue_product();
    totalRevenue.push(totalValue);
    return totalValue;
  }

  function calculateFixedCost() {
    let sum_fixed_cost = 0;
    tableExpenseData.fixed_cost_tables.forEach((tableFixedCost) => {
      tableFixedCost.fixed_costs.forEach((eachFixedCost) => {
        sum_fixed_cost += eachFixedCost.amount;
      });
    });
    return sum_fixed_cost;
  }

  function calculateTotalFixdcost() {
    let totalValue = 0;
    totalValue = calculateFixedCost();
    totalFixedCost.push(totalValue);
    return totalValue;
  }

  return (
    <div>
      <div className="d-flex sen-sidebar-container">
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
          <div>
            <CombinationCharts
              total_service_revenue={totalRevenue}
              total_fixed_cost={totalFixedCost}
            />
          </div>
        </div>

        <div className="">
          {sidebar ? (
            <div className="sen-sidebar">
              <div className="sen-sidebar-show" onClick={showSidebar}>
                <AiOutlineDoubleLeft />
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

              {tableRevenueData.service_tables.map((tableService) => (
                <div key={tableService._id}>
                  {/* <div className="total-text">{tableService.name}</div> */}
                  {tableService.services.map((eachService) => (
                    <div key={eachService._id}>
                      {eachService.name != "" && (
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

              <div className="table-name-side-text">
                รายได้การขายสินค้า/วัน
              </div>
              {tableRevenueData.product_tables.map((tableProduct) => (
                <div key={tableProduct._id}>
                  {/* <div className="total-text">{tableProduct.name}</div> */}
                  {tableProduct.products.map((eachProduct) => (
                    <div key={eachProduct._id}>
                      {eachProduct.name != "" && (
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
              <EditInputOnSidebar
                name="รวมรายได้จากการขายสินค้า/วัน"
                type="text"
                defaultValue={calculateRevenue_product()}
                className="chart-input"
                resultDisplay={true}
              />

              <div className="table-name-side-text">รายจ่าย/วัน</div>
              {tableExpenseData.fixed_cost_tables.map((tableFixedCost) => (
                <div key={tableFixedCost._id}>
                  {/* <div className="total-text">{tableFixedCost.name}</div> */}
                  {tableFixedCost.fixed_costs.map((eachFixedCost) => (
                    <div key={eachFixedCost._id}>
                      {eachFixedCost.name != "" && (
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
              <EditInputOnSidebar
                name="รวมรายจ่าย"
                type="text"
                defaultValue={calculateFixedCost()}
                className="chart-input"
                resultDisplay={true}
              />
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
