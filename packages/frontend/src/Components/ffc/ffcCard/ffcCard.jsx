import React, { useEffect, useState } from "react";
import { create, all } from 'mathjs'
import './ffcCard.css'
import { IconContext } from "react-icons";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

import BarChart from '../../statement/charts/barChart';
import CombinationCharts from '../../statement/charts/combinationCharts';
import CombinationChartsMinMax from '../../statement/charts/combinationChartsMinMax';
import stackedBar from '../../statement/charts/stackedBar';
import DoughnutChart from '../../statement/charts/doughnutChart';
import bizSidebar from '../../bizTools/bizSidebar/bizSidebar';
import statementHearder from '../../statement/statementHearder';
import "../../../pages/checkBiz/statementsPage/chartPages/chartPages.css";
import sensitivityEditSidebar from '../../sensitivity/sensitivityEdit/sidebar/sensitivityEditSidebar';
import { AiOutlineDoubleLeft } from "react-icons/ai";
import "../../sensitivity/sensitivityEdit/sidebar/sensitivityEditSidebar.css";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProjectById,
    projectUpdated,
    updateProject,
} from "../../../features/projectsSlice";
import BIZTOOL_PAGE_CONFIG from '../../../pages/bizTools/pageConfig';
import EditInputOnSidebar from "../../checkbiz/sidebarEditdata/editInputOnSidebar";

const ffcCard = (props) => {

    const [chart, setChart] = useState(false);
    const [tableName, setTableName] = useState("");
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
        return totalValue
    }

    function calculateNPV(initialInvestment, cashFlows, discountRate) {
        let presentValueOfCashFlows = 0
        for (let i = 0; i < cashFlows.length; i++) {
          presentValueOfCashFlows += cashFlows[i] / Math.pow((1 + discountRate), i + 1)
        }
        const netPresentValue = presentValueOfCashFlows - initialInvestment
        return netPresentValue
      }      

    const math = create(all)

    function calculateIRR(cashFlows) {
        const guess = 0.1 // Initial guess for IRR
        const result = math.numeric.irr(cashFlows, guess)
        return result
    }

    function calculatePaybackPeriod(initialInvestment, cashFlows) {
        let cumulativeCashFlow = -initialInvestment // Add the initial investment as a negative cash flow
        let paybackPeriod = 0

        for (let i = 0; i < cashFlows.length; i++) {
            cumulativeCashFlow += cashFlows[i]
            if (cumulativeCashFlow >= 0) {
                paybackPeriod += i + (cumulativeCashFlow - cashFlows[i]) / cashFlows[i + 1]
                break
            }
        }

        return paybackPeriod
    }

    function calculateProfitabilityIndex(initialInvestment, cashFlows, discountRate) {
        let presentValueOfCashFlows = 0
        for (let i = 0; i < cashFlows.length; i++) {
            presentValueOfCashFlows += cashFlows[i] / Math.pow((1 + discountRate), i + 1)
        }
        const netPresentValue = presentValueOfCashFlows - initialInvestment
        const profitabilityIndex = netPresentValue / initialInvestment
        return profitabilityIndex
    }



    return (
        <div className="ffc-card-container">
            <div>
                <div className='d-flex justify-content-between'>
                    <div className="ffc-table-name">{props.tableName ? props.tableName : "tableName"}</div>
                    <div class='d-flex'>
                        <IconContext.Provider value={{ color: "#9fa7c2" }}>
                            <FaThList onClick={() => setChart(false)} />&nbsp;
                            <BsFillBarChartFill onClick={() => setChart(true)} />
                        </IconContext.Provider>
                    </div>
                </div>
                <hr style={{ margin: "2px" }}></hr>
                <div>
                    {chart ?
                        <div className="ffc-card-body-chart">

                            <CombinationCharts
                                className="combination-charts"
                                data_type={props.type}
                            //   total_service_revenue={totalRevenue}
                            //   total_fixed_cost={totalFixedCost}
                            />

                        </div>
                        :
                        <div className='ffc-card-body'>
                            {props.type === "revenue" &&
                                <table class="table table-sm ffc-table-text">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "390px" }} scope="col">name</th>
                                            <th style={{ width: "390px" }} className="text-left" scope="col">amount</th>
                                            <th sstyle={{ width: "390px" }} cope="col">start_date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableRevenueData.service_tables.map((table) => (
                                            <React.Fragment key={table._id}>
                                                {table.services.map((each) => (
                                                    <tr key={each._id}>
                                                        <td>{each.name}</td>
                                                        <td>{each.revenue_per_service}</td>
                                                        <td>{each.start_date.substring(0, 10)}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                        {tableRevenueData.product_tables.map((table) => (
                                            <React.Fragment key={table._id}>
                                                {table.products.map((each) => (
                                                    <tr key={each._id}>
                                                        <td>{each.name}</td>
                                                        <td>{each.revenue_per_unit}</td>
                                                        <td>{each.start_date.substring(0, 10)}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>

                            }
                            {props.type === "revenue-service" &&
                                <table class="table table-sm ffc-table-text">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "390px" }} scope="col">name</th>
                                            <th style={{ width: "390px" }} className="text-left" scope="col">amount</th>
                                            <th sstyle={{ width: "390px" }} cope="col">start_date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableRevenueData.service_tables.map((table) => (
                                            <React.Fragment key={table._id}>
                                                {table.services.map((each) => (
                                                    <tr key={each._id}>
                                                        <td>{each.name}</td>
                                                        <td>{each.revenue_per_service}</td>
                                                        <td>{each.start_date.substring(0, 10)}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>

                            }
                            {props.type === "revenue-product" &&
                                <table class="table table-sm ffc-table-text">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "390px" }} scope="col">name</th>
                                            <th style={{ width: "390px" }} className="text-left" scope="col">amount</th>
                                            <th sstyle={{ width: "390px" }} cope="col">start_date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableRevenueData.product_tables.map((table) => (
                                            <React.Fragment key={table._id}>
                                                {table.products.map((each) => (
                                                    <tr key={each._id}>
                                                        <td>{each.name}</td>
                                                        <td>{each.revenue_per_unit}</td>
                                                        <td>{each.start_date.substring(0, 10)}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            }
                            {props.type === "fixed-cost" &&
                                tableExpenseData.fixed_cost_tables.map((tableFixedCost) => (
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
                            {props.type === "expense" &&
                                <table class="table table-sm ffc-table-text">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "390px" }} scope="col">name</th>
                                            <th style={{ width: "390px" }} className="text-left" scope="col">amount</th>
                                            <th sstyle={{ width: "390px" }} cope="col">start_date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableExpenseData.fixed_cost_tables.map((tableFixedCost) => (
                                            <React.Fragment key={tableFixedCost._id}>
                                                {tableFixedCost.fixed_costs.map((eachFixedCost) => (
                                                    <tr key={eachFixedCost._id}>
                                                        <td>{eachFixedCost.name}</td>
                                                        <td>{eachFixedCost.amount}</td>
                                                        <td>{eachFixedCost.start_date.substring(0, 10)}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            }
                            {props.type === "total-investment" &&
                                <table class="table table-sm ffc-table-text">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "390px" }} scope="col">name</th>
                                            <th style={{ width: "390px" }} className="text-left" scope="col">amount</th>
                                            <th sstyle={{ width: "390px" }} cope="col">start_date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableExpenseData.investment_tables.map((table) => (
                                            <React.Fragment key={table._id}>
                                                {table.investments.map((each) => (
                                                    <tr key={each._id}>
                                                        <td>{each.name}</td>
                                                        <td>{each.amount}</td>
                                                        <td>{each.start_date.substring(0, 10)}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            }
                            {props.type === "financial-return" &&
                                <table class="table table-sm ffc-table-text">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "390px" }} scope="col">Financial Return</th>
                                            <th style={{ width: "190px" }} className="text-left" scope="col">Best Case</th>
                                            <th sstyle={{ width: "190px" }} cope="col">Average</th>
                                            <th sstyle={{ width: "190px" }} cope="col">Worst Case</th>
                                            <th sstyle={{ width: "90px" }} cope="col">xxxx</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Net Present value (NPV)</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            {/* <td>{calculateNPV(initialInvestment, cashFlows, discountRate)}</td> */}
                                        </tr>
                                        <tr>
                                            <td>Internal rate of return (IRR)</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            {/* <td>{calculateIRR(cashFlows)}</td> */}
                                        </tr>
                                        <tr>
                                            <td>Payback period</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            {/* <td>{calculatePaybackPeriod(initialInvestment, cashFlows)}</td> */}
                                        </tr>
                                        <tr>
                                            <td>profitability index (PI)</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            {/* <td>{calculateProfitabilityIndex(initialInvestment, cashFlows, discountRate)}</td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            }

                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default ffcCard