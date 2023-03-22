import React, { useState, useEffect } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import "../biztools.css";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../components/investmentProject/biztoolBody/biztoolBody";
import BIZTOOL_PAGE_CONFIG from "../pageConfig";

import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById, projectUpdated, updateProject } from "../../../features/projectsSlice";


function OperationCostPage() {
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
    setTableData(selectedProject.expense.fixed_cost_tables)
  }, [selectedProject]);

  const [tableData, setTableData] = useState(selectedProject.expense.fixed_cost_tables)
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.operationCost)

  const onCellChange = (tableType, tableId, rowId, columnIndex, value) => {
    let shallowTables = JSON.parse(JSON.stringify(selectedProject.expense.fixed_cost_tables))
    shallowTables = shallowTables.map((eachTable => {
      if (eachTable._id == tableId) {
        let shallowRows = eachTable.fixed_costs
        shallowRows = shallowRows.map(eachRow => {
          if (eachRow._id == rowId) {
            if (columnIndex == 0) {
              return { ...eachRow, name: value }
            }
            else if (columnIndex == 1) {
              return { ...eachRow, amount: Number(value) }
            }
            else if (columnIndex == 2) {
              return value.type == 'cost-increase-dropdown' ? {
                ...eachRow,
                cost_increase: value.cost_increase,
              } : {
                ...eachRow,
                cost_increase_period_id: value.cost_increase_period_id
              }
            }
            else if (columnIndex == 3) {
              return { ...eachRow, period_id: value }
            }
            else if (columnIndex == 4) {
              return { ...eachRow, numbers: value }
            }
          }
          return eachRow
        })
        eachTable.fixed_costs = shallowRows
      }
      return eachTable
    }))
    let shallowSelectedProject = {
      ...selectedProject,
      expense: {
        ...selectedProject.expense,
        fixed_cost_tables: shallowTables
      }
    }
    dispatch(projectUpdated(shallowSelectedProject))
    dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
  }

  return (
    <div className="d-flex">
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <BiztoolHeader
          type={config.type}
          title={config.title}
          handleFunction={config.addTableHandleFunction}
        />
        <BiztoolBody
          onCellChange={onCellChange}
          type={config.type}
          tableStyle={config.tableStyle}
          tableData={tableData}
        />
      </div>
    </div>
  );
}

export default OperationCostPage;