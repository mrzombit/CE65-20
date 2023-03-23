import React, { useState, useEffect } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import BiztoolBody from "../../../components/investmentProject/biztoolBody/biztoolBody";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import '../biztools.css'
import BIZTOOL_PAGE_CONFIG from "../pageConfig";

import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById, projectUpdated, updateProject } from "../../../features/projectsSlice";

function RevenuePage() {
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

  const onCellChange = (tableType, tableId, rowId, columnIndex, value) => {
    let shallowServiceTables = JSON.parse(JSON.stringify(selectedProject.revenue.service_tables))
    let shallowProductTables = JSON.parse(JSON.stringify(selectedProject.revenue.product_tables))
    if (tableType == BIZTOOL_PAGE_CONFIG.revenue.type.service) {
      shallowServiceTables = shallowServiceTables.map((eachTable => {
        if (eachTable._id == tableId) {
          let shallowRows = eachTable.services
          shallowRows = shallowRows.map(eachRow => {
            if (eachRow._id == rowId) {
              if (columnIndex == 0) {
                return { ...eachRow, name: value }
              }
              else if (columnIndex == 1) {
                return { ...eachRow, unit: Number(value) }
              }
              else if (columnIndex == 2) {
                return { ...eachRow, unit_name: value }
              }
              else if (columnIndex == 3) {
                return { ...eachRow, serve_per_unit: Number(value) }
              }
              else if (columnIndex == 4) {
                return { ...eachRow, revenue_per_service: Number(value) }
              }
              else if (columnIndex == 5) {
                return { ...eachRow, cost_per_service: Number(value) }
              }
              else if (columnIndex == 6) {
                return value.type == 'cost-increase-dropdown' ? {
                  ...eachRow,
                  price_increase: value.cost_increase,
                } : {
                  ...eachRow,
                  price_increase_period_id: value.cost_increase_period_id
                }
              }
              else if (columnIndex == 7) {
                return value.type == 'cost-increase-dropdown' ? {
                  ...eachRow,
                  cost_increase: value.cost_increase,
                } : {
                  ...eachRow,
                  cost_increase_period_id: value.cost_increase_period_id
                }
              }
              else if (columnIndex == 8) {
                return { ...eachRow, start_date: value }
              }
            }
            return eachRow
          })
          eachTable.services = shallowRows
        }
        return eachTable
      }))
    }
    else if (tableType == BIZTOOL_PAGE_CONFIG.revenue.type.product) {
      shallowProductTables = shallowProductTables.map((eachTable => {
        if (eachTable._id == tableId) {
          let shallowRows = eachTable.products
          shallowRows = shallowRows.map(eachRow => {
            if (eachRow._id == rowId) {
              if (columnIndex == 0) {
                return { ...eachRow, name: value }
              }
              else if (columnIndex == 1) {
                return {
                  ...eachRow,
                  days_of_inventory: {
                    ...eachRow.days_of_inventory,
                    months: Number(value),
                  }
                }
              }
              else if (columnIndex == 2) {
                return { ...eachRow, revenue_per_unit: Number(value) }
              }
              else if (columnIndex == 3) {
                return { ...eachRow, cost_per_unit: Number(value) }
              }
              else if (columnIndex == 4) {
                return value.type == 'cost-increase-dropdown' ? {
                  ...eachRow,
                  price_increase: value.cost_increase,
                } : {
                  ...eachRow,
                  price_increase_period_id: value.cost_increase_period_id
                }
              }
              else if (columnIndex == 5) {
                return value.type == 'cost-increase-dropdown' ? {
                  ...eachRow,
                  cost_increase: value.cost_increase,
                } : {
                  ...eachRow,
                  cost_increase_period_id: value.cost_increase_period_id
                }
              }
              else if (columnIndex == 6) {
                return { ...eachRow, start_date: value }
              }
              else if (columnIndex == 7) {
                return { ...eachRow, seasonal_trends: value }
              }
            }
            return eachRow
          })
          eachTable.products = shallowRows
        }
        return eachTable
      }))
    }
    let shallowSelectedProject = {
      ...selectedProject,
      revenue: {
        service_tables: shallowServiceTables,
        product_tables: shallowProductTables,
      }
    }
    dispatch(projectUpdated(shallowSelectedProject))
    dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
  }

  const addRowHandle = (tableType, tableId) => {
    const initialRow = {
      service: {
        name: "",
        unit: 0,
        unit_name: "",
        serve_per_unit: 0,
        revenue_per_service: 0,
        cost_per_service: 0,
        price_increase: 0,
        price_increase_period_id: "63de92ebd63688ac8b7ed999",
        cost_increase: 0,
        cost_increase_period_id: "63de92ebd63688ac8b7ed999",
        start_date: new Date(),
        seasonal_trends: [],
      },
      product: {
        name: "",
        days_of_inventory: {
          days: 0,
          months: 0,
        },
        revenue_per_unit: 0,
        cost_per_unit: 0,
        price_increase: 0,
        price_increase_period_id: "63de92ebd63688ac8b7ed999",
        cost_increase: 0,
        cost_increase_period_id: "63de92ebd63688ac8b7ed999",
        start_date: new Date(),
        seasonal_trends: [],
      }
    }

    let shallowServiceTables = JSON.parse(JSON.stringify(selectedProject.revenue.service_tables))
    let shallowProductTables = JSON.parse(JSON.stringify(selectedProject.revenue.product_tables))

    if (tableType == BIZTOOL_PAGE_CONFIG.revenue.type.service) {
      shallowServiceTables = shallowServiceTables.map(eachTable => {
        if (eachTable._id == tableId) eachTable.services.push(initialRow.service)
        return eachTable
      })
    }
    else if (tableType == BIZTOOL_PAGE_CONFIG.revenue.type.product) {
      shallowProductTables = shallowProductTables.map(eachTable => {
        if (eachTable._id == tableId) eachTable.products.push(initialRow.product)
        return eachTable
      })
    }

    const shallowSelectedProject = {
      ...selectedProject,
      revenue: {
        service_tables: shallowServiceTables,
        product_tables: shallowProductTables
      }
    }

    dispatch(projectUpdated(shallowSelectedProject))
    dispatch(updateProject({id: selectedProject._id, data: shallowSelectedProject}))
  }

  const tableHeaderOnChange = (tableType, tableId, value) => {
    let shallowServiceTables = JSON.parse(JSON.stringify(selectedProject.revenue.service_tables))
    let shallowProductTables = JSON.parse(JSON.stringify(selectedProject.revenue.product_tables))

    if (tableType == BIZTOOL_PAGE_CONFIG.revenue.type.service) {
      shallowServiceTables = shallowServiceTables.map(eachTable => {
        if (eachTable._id == tableId) eachTable.name = value
        return eachTable
      })
    }
    else if (tableType == BIZTOOL_PAGE_CONFIG.revenue.type.product) {
      shallowProductTables = shallowProductTables.map(eachTable => {
        if (eachTable._id == tableId) eachTable.name = value
        return eachTable
      })
    }

    const shallowSelectedProject = {
      ...selectedProject,
      revenue: {
        service_tables: shallowServiceTables,
        product_tables: shallowProductTables
      }
    }

    dispatch(projectUpdated(shallowSelectedProject))
    dispatch(updateProject({id: selectedProject._id, data: shallowSelectedProject}))
  }

  return (
    <div className="d-flex ">
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <BiztoolHeader
          type={config.type}
          title={config.title}
        />
        <BiztoolBody
          tableHeaderOnChange={tableHeaderOnChange}
          addRowHandle={addRowHandle}
          onCellChange={onCellChange}
          type={config.type}
          tableStyle={config.tableStyle}
          tableData={tableData}
          handleFunction={config.addTableHandleFunction}
        />
      </div>
    </div>
  );
}

export default RevenuePage;