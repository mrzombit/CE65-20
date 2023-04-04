import React, { useEffect, useState, useContext  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById, projectUpdated, updateProject } from "../../../features/projectsSlice"
import BIZTOOL_PAGE_CONFIG from "../../../pages/bizTools/pageConfig";

export default function checkbizFormula_try() {
    // return <h1>Small</h1>;

const totalRevenue = []
const totalFixedCost = []

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
  setTableRevenueData(selectedProject.revenue)
  setTableExpenseData(selectedProject.expense)
}, [selectedProject]);

const [tableRevenueData, setTableRevenueData] = useState(selectedProject.revenue)
const [tableExpenseData, setTableExpenseData] = useState(selectedProject.expense)
const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.revenue)

const [tableService, setTableService] = useState()
const [service, setService] = useState()
const [revenuePerService, setRevenuePerService] = useState()

const onValChange = (tableID, unitID, amountPerUnit) => {
  let shallowServiceTables = JSON.parse(JSON.stringify(selectedProject.revenue.service_tables))
  let shallowProductTables = JSON.parse(JSON.stringify(selectedProject.revenue.product_tables))
  let shallowFixedCostTables = JSON.parse(JSON.stringify(selectedProject.expense.fixed_cost_tables))

  shallowServiceTables = shallowServiceTables.map((eachTableService) => {
    if (eachTableService._id == tableID) {
      eachTableService.services = eachTableService.services.map((eachService) => {
        if (eachService._id == unitID) {
          if (eachService.revenue_per_service !== amountPerUnit) {
            eachService.revenue_per_service = amountPerUnit
          }
        }
        return eachService
      })
    }
    return eachTableService
  })

  shallowProductTables = shallowProductTables.map((eachTableProduct) => {
    if (eachTableProduct._id == tableID) {
      eachTableProduct.products = eachTableProduct.products.map((eachProduct) => {
        if (eachProduct._id == unitID) {
          if (eachProduct.revenue_per_unit !== amountPerUnit) {
            eachProduct.revenue_per_unit = amountPerUnit
          }
        }
        return eachProduct
      })
    }
    return eachTableProduct
  })

  shallowFixedCostTables = shallowFixedCostTables.map((eachTableFixedCost) => {
    if (eachTableFixedCost._id == tableID) {
      eachTableFixedCost.fixed_costs = eachTableFixedCost.fixed_costs.map((eachFixedCost) => {
        if (eachFixedCost._id == unitID) {
          if (eachFixedCost.amount !== amountPerUnit) {
            eachFixedCost.amount = amountPerUnit
          }
        }
        return eachFixedCost
      })
    }
    return eachTableFixedCost
  })

  let shallowSelectedProject = {
    ...selectedProject,
    revenue: {
      service_tables: shallowServiceTables,
      product_tables: shallowProductTables,
    },
    expense: {
      fixed_cost_tables: shallowFixedCostTables,
    }
  }
  dispatch(projectUpdated(shallowSelectedProject))
  dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
}



function sum_revenue_service(tableRevenueData) {
    let sumServiceRevenue = 0;
    tableRevenueData.service_tables.forEach(tableService => {
        tableService.services.forEach(eachService => {
            sumServiceRevenue += eachService.revenue_per_service;
        });
    });
    return sumServiceRevenue;
}
function sum_revenue_product(tableRevenueData) {
    let sumProductRevenue = 0;
    tableRevenueData.product_tables.forEach(tableProduct => {
        tableProduct.products.forEach(eachProduct => {
            sumProductRevenue += eachProduct.revenue_per_unit;
        });
    });
    return sumProductRevenue;
}

function sum_revenue() {
    let totalValue = 0
    totalValue = sum_revenue_service() + sum_revenue_product()
    return totalValue
}


function sum_fixed_cost(tableExpenseData) {
    let sumFixedCost = 0;
    tableExpenseData.fixed_cost_tables.forEach(tableFixedCost => {
        tableFixedCost.fixed_costs.forEach(eachFixedCost => {
            sumFixedCost += eachFixedCost.amount;
        });
    });
    return sumFixedCost;
}

function fixed_cost_per_years() {
    let totalValue = 0
    totalValue = sum_fixed_cost()
    totalFixedCost.push(totalValue)
    return totalValue
}

function revenue_per_years() {
    let totalValue = 0
    totalValue = sum_revenue_service() + sum_revenue_product()
    totalFixedCost.push(totalValue)
    return totalValue
}

function total_income() {
    let totalValue = 0
    totalValue = sum_revenue() - sum_fixed_cost()
    totalFixedCost.push(totalValue)
    return totalValue
}

}













//  named exports
// export {
//     sum_revenue_service, sum_revenue_product, sum_revenue,
//     sum_fixed_cost, fixed_cost_per_years, revenue_per_years, 
//     total_income,
// };
