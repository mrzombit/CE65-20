import React, { useState, useEffect } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import BiztoolBody from "../../../components/investmentProject/biztoolBody/biztoolBody";
import BIZTOOL_PAGE_CONFIG from "../pageConfig";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjectById,
  projectUpdated,
  updateProject,
} from "../../../features/projectsSlice";

function MiscellaneousPage() {
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
    setTableData({
      equity_contribution_tables: [
        {
          equity_contributions: selectedProject.miscellaneous.equity_contribution,
        },
      ],
      equity_repayment_tables: [
        {
          equity_repayments: selectedProject.miscellaneous.equity_repayment,
        },
      ],
      debt_issuance_tables: [
        {
          debt_issuances: selectedProject.miscellaneous.debt_issuance,
        },
      ],
    })
  }, [selectedProject]);

  const [tableData, setTableData] = useState({
    equity_contribution_tables: [
      {
        equity_contributions: selectedProject.miscellaneous.equity_contribution, //array
      },
    ],
    equity_repayment_tables: [
      {
        equity_repayments: selectedProject.miscellaneous.equity_repayment,
      },
    ],
    debt_issuance_tables: [
      {
        debt_issuances: selectedProject.miscellaneous.debt_issuance,
      },
    ],
  });
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.miscellaneous);

  const onCellChange = (tableType, tableId, rowId, columnIndex, value) => {
    let shallowEquityContributionTables = JSON.parse(JSON.stringify(tableData.equity_contribution_tables))
    let shallowEquityRepaymentTables = JSON.parse(JSON.stringify(tableData.equity_repayment_tables))
    let shallowDebtIssuanceTables = JSON.parse(JSON.stringify(tableData.debt_issuance_tables))
    if (tableType == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution) {
      shallowEquityContributionTables = shallowEquityContributionTables.map((eachTable => {
        let shallowRows = eachTable.equity_contributions
        shallowRows = shallowRows.map(eachRow => {
          if (eachRow._id == rowId) {
            if (columnIndex == 0) {
              return { ...eachRow, name: value }
            }
            else if (columnIndex == 1) {
              return { ...eachRow, amount: Number(value) }
            }
            else if (columnIndex == 2) {
              return { ...eachRow, date: value }
            }
          }
          return eachRow
        })
        eachTable.equity_contributions = shallowRows
        return eachTable
      }))
    }
    if (tableType == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment) {
      shallowEquityRepaymentTables = shallowEquityRepaymentTables.map((eachTable => {
        let shallowRows = eachTable.equity_repayments
        shallowRows = shallowRows.map(eachRow => {
          if (eachRow._id == rowId) {
            if (columnIndex == 0) {
              return { ...eachRow, name: value }
            }
            else if (columnIndex == 1) {
              return { ...eachRow, share: parseFloat(value) }
            }
            else if (columnIndex == 2) {
              // console.log(JSON.stringify(value));
              let shallowRepayment =  {
                period_id: value.periodId,
                start_date: value.startDate,
              }
              return { ...eachRow, repayment: shallowRepayment }
            }
          }
          return eachRow
        })
        eachTable.equity_repayments = shallowRows
        return eachTable
      }))
    }
    if (tableType == BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance) {
      shallowDebtIssuanceTables = shallowDebtIssuanceTables.map((eachTable => {
        if (eachTable._id == tableId) {
          let shallowRows = eachTable.debt_issuances
          shallowRows = shallowRows.map(eachRow => {
            if (columnIndex == 0) {
              return { ...eachRow, name: value }
            }
            else if (columnIndex == 1) {
              return { ...eachRow, amount: value }
            }
            else if (columnIndex == 2) {
              return { ...eachRow, start_date: value }
            }
            else if (columnIndex == 3) {
              return { ...eachRow, apr: parseFloat(value) }
            }
            else if (columnIndex == 4) {
              return { ...eachRow, period_id: value }
            }
            else if (columnIndex == 5) {
              return { ...eachRow, payments: value }
            }
            return eachRow
          })
          eachTable.debt_issuances = shallowRows
        }
        return eachTable
      }))
    }
    let shallowSelectedProject = {
      ...selectedProject,
      miscellaneous: {
        equity_contribution: shallowEquityContributionTables[0].equity_contributions,
        equity_repayment: shallowEquityRepaymentTables[0].equity_repayments,
        debt_issuance: shallowDebtIssuanceTables[0].debt_issuances,
      }
    }
    dispatch(projectUpdated(shallowSelectedProject))
    dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
  }

  const addRowHandle = (tableType, tableId) => {
    const initialRow = {
      equity_contribution: {
        name: "",
        amount: 0,
        date: new Date(),
      },
      equity_repayment: {
        name: "",
        share: 0,
        repayment: {
          period_id: "63de932fd63688ac8b7ed99f",
          start_date: new Date(),
        },
      },
      debt_issuance: {
        name: "",
        amount: 0,
        apr: 0,
        period_id: "63de932fd63688ac8b7ed99f", 
        payments:[]
      },
    }

    let shallowEquityContributionTables = JSON.parse(JSON.stringify(tableData.equity_contribution_tables))
    let shallowEquityRepaymentTables = JSON.parse(JSON.stringify(tableData.equity_repayment_tables))
    let shallowDebtIssuanceTables = JSON.parse(JSON.stringify(tableData.debt_issuance_tables))

    if (tableType == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution) {
      shallowEquityContributionTables = shallowEquityContributionTables.map(eachTable => {
        eachTable.equity_contributions.push(initialRow.equity_contribution)
        return eachTable
      })
    }

    else if (tableType == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment) {
      shallowEquityRepaymentTables = shallowEquityRepaymentTables.map(eachTable => {
        eachTable.equity_repayments.push(initialRow.equity_repayment)
        return eachTable
      })
    }
    else if (tableType == BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance) {
      shallowDebtIssuanceTables = shallowDebtIssuanceTables.map(eachTable => {
        eachTable.debt_issuances.push(initialRow.debt_issuance)
        return eachTable
      })
    }

    let shallowSelectedProject = {
      ...selectedProject,
      miscellaneous: {
        equity_contribution: shallowEquityContributionTables[0].equity_contributions,
        equity_repayment: shallowEquityRepaymentTables[0].equity_repayments,
        debt_issuance: shallowDebtIssuanceTables[0].debt_issuances,
      }
    }

    dispatch(projectUpdated(shallowSelectedProject))
    dispatch(updateProject({id: selectedProject._id, data: shallowSelectedProject}))
  }

  return (
    <div className="d-flex ">
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <BiztoolHeader type={config.type} title={config.title} />
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

export default MiscellaneousPage;