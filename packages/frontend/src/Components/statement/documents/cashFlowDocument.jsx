import React, { useEffect, useState } from "react";
import "../statement.css";
import CHECKBIZ_CONFIG from "../../checkbiz/checkbizData/checkbizConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjectById,
  projectUpdated,
  updateProject,
} from "../../../features/projectsSlice";


const cashFlowDocument = () => {
  const yearRange = [2565, 2566, 2567, 2568];
  const inittialCashFlowData = CHECKBIZ_CONFIG.cashflow

  let totalInvestment = [0, 0, 0];
  let totalRevenue = [0, 0, 0];
  let totalfixedCost = [0, 0, 0];
  let mock = [99999, 99999, 99999, 99999]

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
    setprojectName(selectedProject.name)
    setTableRevenueData(selectedProject.revenue);
    setTableExpenseData(selectedProject.expense);
    setTableModelConfigData(selectedProject.model_config);
  }, [selectedProject]);

  const [projectName, setprojectName] = useState(
    selectedProject.name
  );
  const [tableRevenueData, setTableRevenueData] = useState(
    selectedProject.revenue
  );
  const [tableExpenseData, setTableExpenseData] = useState(
    selectedProject.expense
  );
  const [tableModelConfigData, setTableModelConfigData] = useState(
    selectedProject.expense
  );

  function calculateInitialInvestment() {
    let total = 0
    tableExpenseData.investment_tables.forEach((table) => {
      table.investments.forEach((eachCost) => {
        total += eachCost.amount;
      });
      totalInvestment.unshift(total)
    });


  }
  function calculateCashFlows(initialInvestment, annualGrowthRate, numberOfYears) {
    let cashFlows = [];
    let currentCashFlow = initialInvestment;

    for (let i = 0; i < numberOfYears; i++) {
      cashFlows.push(currentCashFlow);
      currentCashFlow = currentCashFlow * (1 + annualGrowthRate);
    }

    return cashFlows;
  }


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
    let sum_product_revenue = 0;
    let sum_service_revenue = 0;
    tableRevenueData.product_tables.forEach((tableProduct) => {
      tableProduct.products.forEach((eachProduct) => {
        sum_product_revenue += eachProduct.revenue_per_unit;
      });
    });
    tableRevenueData.service_tables.forEach((tableService) => {
      tableService.services.forEach((eachService) => {
        sum_service_revenue += eachService.revenue_per_service;
      });
    });
    totalValue = sum_product_revenue + sum_service_revenue
    totalRevenue.push(totalValue)
    // return totalValue;
  }

  function calculateFixedCost() {
    let sum_fixed_cost = 0;
    tableExpenseData.fixed_cost_tables.forEach((tableFixedCost) => {
      tableFixedCost.fixed_costs.forEach((eachFixedCost) => {
        sum_fixed_cost += eachFixedCost.amount;
      });
    });
    totalfixedCost.push(sum_fixed_cost)
    // return sum_fixed_cost;
  }


  return (
    <div className="">
      <div>
        <div className="dov-head-cell mb-3">บริษัท {projectName}</div>
        <div className="dov-head-cell">งบกระแสเงินสด</div>
        <div className="dov-name-cell">การประมาณการในช่วง ปี 2565 - 2568</div>
        <div className="biz-water-mask">create by BIZCHECK</div>
        <table className="table container table-hover">
          <thead>
            <tr className="table">
              <th scope="col" className="dov-name-cell">รายการ</th>
              {yearRange.map((i) => (
                <th scope="col" className="dov-money-cell">{i}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <th className="dov-name-cell">กระแสเงินสดจากกิจกรรมดำเนินงาน</th>
            {/* <tr>
              <td className="dov-name-cell">ค่าเสื่อมราคาและการจัดจำหน่าย</td>
              {(calculateCashFlows(totalInvestment, 0.7, 4)).map(eachYear => (
                <td scope="col" className="dov-money-cell">{eachYear}</td>
              ))}
            </tr> */}
            <tr>
              <td className="dov-name-cell">ต้นทุนทางการเงิน</td>
              {calculateFixedCost()}
              {totalfixedCost.map(eachYear => (
                <td scope="col" className="dov-money-cell">{eachYear.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>
            <tr>
              <td className="dov-name-cell">รายได้ทางการเงิน</td>
              {calculateRevenue()}
              {totalRevenue.map(eachYear => (
                <td scope="col" className="dov-money-cell">{eachYear.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>
            <th className="dov-name-cell">กระแสเงินสดจากกิจกรรมลงทุน</th>
            <tr>
              <td className="dov-name-cell">ค่าใช้จ่ายการลงทุน</td>
              {calculateInitialInvestment()}
              {totalInvestment.map(eachYear => (
                <td scope="col" className="dov-money-cell">{eachYear.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>

            <th className="dov-name-cell">กระแสเงินสดจากกิจกรรมจัดหาเงิน</th>
            <tr>
              <td className="dov-name-cell">เงินสดจ่ายจากการชำระเงินกู้</td>
              {/* {(calculateCashFlows(totalInvestment, 0.7, 4)).map(eachYear => ( */}
              {mock.map(eachYear => (
                // yearRange.map((i) => (
                <td scope="col" className="dov-money-cell">{eachYear}</td>
                // ))
              ))}
            </tr>
            <tr>
              <td className="dov-name-cell">เงินสดรับจากการขายหุ้น</td>
              {mock.map(eachYear => (
                // yearRange.map((i) => (
                <td scope="col" className="dov-money-cell">{eachYear}</td>
                // ))
              ))}
            </tr>
            <tr>
              <td className="dov-name-cell">เงินสดจ่ายจากเงินปันผล</td>
              {mock.map(eachYear => (
                // yearRange.map((i) => (
                <td scope="col" className="dov-money-cell">{eachYear}</td>
                // ))
              ))}
            </tr>
            <tr>
              <th className="dov-name-cell">กระแสเงินสดสุทธิ</th>
              {mock.map(eachYear => (
                // yearRange.map((i) => (
                <th scope="col" className="dov-money-cell">{eachYear}</th>
                // ))
              ))}
            </tr>


            {/* {tableRevenueData.service_tables.map((table) => (
                                            <React.Fragment key={table._id}>
                                                {table.services.map((each) => (
                                                    <tr key={each._id}>
                                                        <td className="dov-name-cell">{each.name}</td>
                                                        {yearRange.map((i) => (
                                                            <td scope="col" className="dov-money-cell">{each.revenue_per_service.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))} */}



          </tbody>




        </table>
      </div>

    </div>
  );
};

export default cashFlowDocument;
