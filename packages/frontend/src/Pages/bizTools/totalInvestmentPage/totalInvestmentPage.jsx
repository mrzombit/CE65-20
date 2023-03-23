import React, { useState, useEffect } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import "../biztools.css";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../components/investmentProject/biztoolBody/biztoolBody";
import BIZTOOL_PAGE_CONFIG from "../pageConfig";

import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById, projectUpdated, updateProject } from "../../../features/projectsSlice";

function TotalInvestmentPage() {

  const dispatch = useDispatch();
  const selectedProject = useSelector((state) => state.projects.selectedProject);
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });

  useEffect(() => {
    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject));
      setIsLoaded({ user: true, project: true });
    }
    setTableData(selectedProject.expense.investment_tables)
  }, [selectedProject]);

  const [tableData, setTableData] = useState(selectedProject.expense.investment_tables);
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.totalInvestment);

  const onCellChange = (tableType, tableId, rowId, columnIndex, value) => {
    let shallowTables = JSON.parse(JSON.stringify(selectedProject.expense.investment_tables))
    shallowTables = shallowTables.map((eachTable => {
      if (eachTable._id == tableId) {
        let shallowRows = eachTable.investments
        shallowRows = shallowRows.map(eachRow => {
          if (eachRow._id == rowId) {
            if (columnIndex == 0) {
              return { ...eachRow, name: value }
            }
            else if (columnIndex == 1) {
              return { ...eachRow, amount: Number(value) }
            }
            else if (columnIndex == 2) {
              return { ...eachRow, account_id: value }
            }
            else if (columnIndex == 3) {
              return { ...eachRow, start_date: value }
            }
          }
          return eachRow
        })
        eachTable.investments = shallowRows
      }
      return eachTable
    }))
    let shallowSelectedProject = {
      ...selectedProject,
      expense: {
        ...selectedProject.expense,
        investment_tables: shallowTables
      }
    }
    dispatch(projectUpdated(shallowSelectedProject))
    dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
  }

  const addRowHandle = (tableType, tableId) => {
    const initialRow = {
      name: "",
      amount: 0,
      account_id: "63de8eead63688ac8b7ed990",
      is_initial: true,
      start_date: new Date(),
    }
    let shallowTables = JSON.parse(JSON.stringify(selectedProject.expense.investment_tables))
    shallowTables = shallowTables.map(eachTable => {
      if (eachTable._id == tableId) eachTable.investments.push(initialRow)
      return eachTable
    })

    const shallowSelectedProject = {
      ...selectedProject,
      expense: {
        ...selectedProject.expense,
        investment_tables: shallowTables
      }
    }
    dispatch(projectUpdated(shallowSelectedProject))
    dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
  }

  return (
    <div className="d-flex ">
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <BiztoolHeader
          type={config.type}
          title={config.title}
          handleFunction={config.addTableHandleFunction}
        />
        <BiztoolBody
          addRowHandle={addRowHandle}
          onCellChange={onCellChange}
          type={config.type}
          tableStyle={config.tableStyle}
          tableData={tableData}
        />
      </div>
    </div>
  );
}

export default TotalInvestmentPage;
