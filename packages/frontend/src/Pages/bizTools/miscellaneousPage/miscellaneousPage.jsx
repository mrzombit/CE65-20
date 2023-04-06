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
import BiztoolPopup from "../../../components/common/biztoolPopup";
import PaymentsTable from "../../../components/investmentProject/biztoolBody/biztoolTableList/biztoolTable/biztoolCell/paymentsTable";

function MiscellaneousPage() {
  const dispatch = useDispatch();
  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });
  const [repaymentPopupState, setRepaymentPopupState] = useState(false)
  const [equityIdAdded, setEquityIdAdded] = useState(false)

  useEffect(() => {
    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject));
      setIsLoaded({ user: true, project: true });
    }
    if (equityIdAdded) {
      console.log('added');
      const shallowLastestEquityId = selectedProject.miscellaneous.equity_contribution[selectedProject.miscellaneous.equity_contribution.length - 1]._id
      console.log(shallowLastestEquityId);
      if (shallowLastestEquityId !== undefined) {
        generateEquityRepaymentRow(shallowLastestEquityId)
        setEquityIdAdded(false)
      }
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
  }, [selectedProject, equityIdAdded]);

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
  const config = BIZTOOL_PAGE_CONFIG.miscellaneous

  const onCellChange = (tableType, tableId, rowId, columnIndex, value) => {
    let shallowEquityContributionTables = JSON.parse(JSON.stringify(tableData.equity_contribution_tables))
    let shallowEquityRepaymentTables = JSON.parse(JSON.stringify(tableData.equity_repayment_tables))
    let shallowDebtIssuanceTables = JSON.parse(JSON.stringify(tableData.debt_issuance_tables))
    if (tableType === BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution) {
      shallowEquityContributionTables = shallowEquityContributionTables.map((eachTable => {
        let shallowRows = eachTable.equity_contributions
        shallowRows = shallowRows.map(eachRow => {
          if (eachRow._id === rowId) {
            if (columnIndex === 0) {
              return { ...eachRow, name: value }
            }
            else if (columnIndex === 1) {
              return { ...eachRow, amount: Number(value) }
            }
            else if (columnIndex === 2) {
              return { ...eachRow, date: value }
            }
          }
          return eachRow
        })
        eachTable.equity_contributions = shallowRows
        return eachTable
      }))
    }
    if (tableType === BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance) {
      shallowDebtIssuanceTables = shallowDebtIssuanceTables.map((eachTable => {
        let shallowRows = eachTable.debt_issuances
        shallowRows = shallowRows.map(eachRow => {
          if (columnIndex === 0) {
            return { ...eachRow, name: value }
          }
          else if (columnIndex === 1) {
            return { ...eachRow, amount: value }
          }
          else if (columnIndex === 2) {
            return { ...eachRow, start_date: value }
          }
          else if (columnIndex === 3) {
            return { ...eachRow, apr: parseFloat(value) }
          }
          else if (columnIndex === 4) {
            return { ...eachRow, period_id: value }
          }
          else if (columnIndex === 5) {
            return { ...eachRow, payments: value }
          }
          return eachRow
        })
        eachTable.debt_issuances = shallowRows
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

  const addRowHandle = (tableType) => {
    let shallowEquityContributionTables = JSON.parse(JSON.stringify(tableData.equity_contribution_tables))
    let shallowEquityRepaymentTables = JSON.parse(JSON.stringify(tableData.equity_repayment_tables))
    let shallowDebtIssuanceTables = JSON.parse(JSON.stringify(tableData.debt_issuance_tables))
    const initialRow = {
      equity_contribution: {
        name: `ผู้ถือหุ้น(${tableData.equity_contribution_tables[0].equity_contributions.length>0?tableData.equity_contribution_tables[0].equity_contributions.lengt:''})`,
        amount: 0,
        date: new Date(),
      },
      debt_issuance: {
        name: `การกู้ยืม${tableData.debt_issuance_tables[0].debt_issuances.length}`,
        amount: 0,
        apr: 0,
        period_id: "63de932fd63688ac8b7ed99f",
        payments: []
      },
    }
    if (tableType === BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution) {
      shallowEquityContributionTables = shallowEquityContributionTables.map(eachTable => {
        eachTable.equity_contributions.push(initialRow.equity_contribution)
        return eachTable
      })
      setEquityIdAdded(true)
    }
    else if (tableType === BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance) {
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
    dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
  }

  const generateEquityRepaymentRow = (shallowLastestEquityId) => {
    let shallowEquityContributionTables = JSON.parse(JSON.stringify(tableData.equity_contribution_tables))
    let shallowEquityRepaymentTables = JSON.parse(JSON.stringify(tableData.equity_repayment_tables))
    let shallowDebtIssuanceTables = JSON.parse(JSON.stringify(tableData.debt_issuance_tables))

    shallowEquityRepaymentTables = shallowEquityRepaymentTables.map(eachTable => {
      eachTable.equity_repayments.push({
        equity_contribution_id: shallowLastestEquityId,
        repayment:
        {
          period_id: "63de932fd63688ac8b7ed99f",
          start_date: new Date(),
        }
      })
      return eachTable
    })


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

  const setRepaymentPopupStateFunction = () => {
    setRepaymentPopupState(true)
  }

  const handleRowOptionFunction = (tableType, tableId, rowId) => {
    let shallowEquityContributionTables = JSON.parse(JSON.stringify(tableData.equity_contribution_tables))
    let shallowEquityRepaymentTables = JSON.parse(JSON.stringify(tableData.equity_repayment_tables))
    let shallowDebtIssuanceTables = JSON.parse(JSON.stringify(tableData.debt_issuance_tables))

    if (tableType === BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution) {
      shallowEquityContributionTables = shallowEquityContributionTables.map(eachTable => {
        let shallowRows = []
        eachTable.equity_contributions.forEach((eachRow) => {
          if (eachRow._id !== rowId) shallowRows.push(eachRow)
          else {
            // console.log('a\n');
            //shallowEquityRepaymentTables = 
            shallowEquityRepaymentTables = shallowEquityRepaymentTables.map(eachTable => {
              let shallowEquityRepaymentRows = []
              eachTable.equity_repayments.forEach(eachRepaymentRow => {
                console.log(eachRepaymentRow.equity_contribution_id);
                console.log(eachRow._id);
                // if (eachRepaymentRow.equity_contribution_id !== eachRow._id) shallowEquityRepaymentRows.push(eachRepaymentRow)
                shallowEquityRepaymentRows.push(eachRepaymentRow)
              })
              eachTable.equity_repayments = shallowEquityRepaymentRows
              return eachTable
            })
          }
        }
        )
        eachTable.equity_contributions = shallowRows
        return eachTable
      })
    }
    if (tableType === BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance) {
      shallowDebtIssuanceTables = shallowDebtIssuanceTables.map((eachTable) => {
        let shallowRows = []
        eachTable.debt_issuances.forEach(eachRow => {
          if (eachRow._id !== rowId) shallowRows.push(eachRow)
        })
        eachTable.debt_issuances = shallowRows
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
    dispatch(updateProject({ id: selectedProject._id, data: shallowSelectedProject }))
  }

  return (
    <div>
      <BiztoolPopup
        preTitle={`รายละเอียดการชำระเงินกู้: ${selectedProject.name}`}
        content={<PaymentsTable data={tableData ? tableData.debt_issuance_tables : null} onCellChange={onCellChange} />}
        trigger={repaymentPopupState}
        close={() => setRepaymentPopupState(false)}
      />
      <div className="d-flex ">
        <BizSidebar />
        <div className="p-4 biztool-body-width">
          <BiztoolHeader type={config.type} title={config.title} />
          <BiztoolBody
            handleRowOptionFunction={handleRowOptionFunction}
            addRowHandle={addRowHandle}
            onCellChange={onCellChange}
            type={config.type}
            tableStyle={config.tableStyle}
            tableData={tableData}
            setRepaymentPopupStateFunction={setRepaymentPopupStateFunction}
          />
        </div>
      </div></div>
  );
}

export default MiscellaneousPage;