import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./biztoolTable.css";
import BIZTOOL_PAGE_CONFIG from "../../../../../pages/bizTools/pageConfig";
import { useDispatch, useSelector } from "react-redux";
import BizDropdown from "../../../../bizTools/eachCellTableType/bizDropdown";
import BizEachItemPerYear from "../../../../bizTools/eachCellTableType/bizEachItemPerYear";
import { updateProject } from "../../../../../features/projectsSlice";
import AddRow from "./addRow";
import BiztoolRow from "./biztoolRow";

const BiztoolTable = (props) => {
  // const tableId = props.tableId;
  const eachTable = props.eachTable;
  const [addRowState, setAddRowState] = useState(false);

  const inputInitial = {
    totalInvestment: {
      name: "",
      amount: 0,
      assetAcount: "",
      start_date: "",
    },
    operationCost: {
      name: "",
      amount: 0,
      cost_increase: "",
      period_id: "",
      //ตาราง จำนวน(หน่วย)
    },
    revenue: {
      service: {
        name: "",
        unit: "",
        unit_name: "",
        serve_per_unit: "",
        revenue_per_service: "",
        cost_per_service: "",
        price_increase: "",
        cost_increase: "",
        start_date: "",
      },
      product: {
        name: "",
        days_of_inventory: "",
        revenue_per_unit: "",
        cost_per_service: "",
        price_increase: "",
        // name: "",
        // name: "",
      },
    },
    miscellaneous: {
      equityContribution: {
        name: "",
        amount: 0,
        date: "",
      },
      equityRepayment: {
        name: "",
        share: 0,
        start_date: "",
      },
      debtIssuance: {
        name: "",
        amount: 0,
        payments_date: "",
        apr: "",
      },
    },
  };
  const [inputVal, setInputVal] = useState(inputInitial);

  const dispatch = useDispatch();
  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });

  const columnStyles = props.tableStyle.column.map((each) => ({
    width: each.width,
    color: each.color,
    type: each.type,
    backgroundColor: each.backgroundColor,
  }));

  useEffect(() => {
    const closeAddRow = (e) => {
      // console.log(e.srcElement.innerText + e.srcElement.nodeName);
      // console.log(e.srcElement.nodeName);
      console.log(e.srcElement);
      if (
        e.srcElement.innerText !== "เพิ่มรายการ" &&
        e.srcElement.nodeName !== "INPUT"
      ) {
        // console.log("OUTSIDE!!")
        //if add or edit data :
        //AddProjectForm <AddProjectForm />

        // if(e.srcElement.value !== null){
        //   dispatch(updateProject(selectedProject));
        // }

        setAddRowState(false);
      }
    };
    document.body.addEventListener("click", closeAddRow);
    return () => document.body.removeEventListener("click", closeAddRow);
  }, []);

  const addRowHandle = (tableId) => {
    setAddRowState(true);
    alert(`add row! ${JSON.stringify(tableId)}`);
    console.log(eachTable);
  };

  const handleChange = (event) => {
    setInputVal(event.target.value);

    console.log("value is:", event.target.value);
  };
  // const closeMenu = () => {
  //   setAddRowState(false, () => {
  //     document.removeEventListener('click', closeMenu);
  //   });
  //   console.log("CLOSE!!")
  // }

  // const handleClick = event => {
  //   // event.preventDefault();

  //   setAddRowState(true , () => {
  //     document.addEventListener("click", closeMenu);
  //   });
  // };

  // useEffect(() => {
  //   const shalloAssetAccountsOptions = assetAccounts.map((each) => {
  //     console.log(each)
  //     return { value: each._id, label: each.name.local}
  //   })
  // });

  // const formReduxzdata = props.redux.data

  // const onChangeAt = (row,col,val) => {
  //   if props.type == "total-investment":
  //     if columId == 0:
  //           logic  const  change shallowData at columnId
  //           call redux updateAPI shallowData._id with shallowData
  // }

  return (
    <div className="mb-4">
      <div key={eachTable._id} className="d-flex">
        {props.tableStyle.column.map((eachColumn, index) => (
          <>
            {index == 0 && (
              <div
                key={eachColumn.colId}
                className="column border border-dark"
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachTable.name ? eachTable.name : eachColumn.title}
              </div>
            )}
            {index !== 0 && (
              <div
                key={eachColumn.colId}
                className="column border border-dark"
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachColumn.title}
              </div>
            )}
          </>
        ))}
      </div>

      {props.type == BIZTOOL_PAGE_CONFIG.totalInvestment.type.page &&
        eachTable.investments.map((eachRow) => (
          <BiztoolRow
            key={eachTable._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}

      {props.type == BIZTOOL_PAGE_CONFIG.operationCost.type.page &&
        eachTable.fixed_costs.map((eachRow) => (
          <BiztoolRow
            key={eachTable._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}

      {props.type == BIZTOOL_PAGE_CONFIG.revenue.type.service &&
        eachTable.services.map((eachRow) => (
          <BiztoolRow
            key={eachTable._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type == BIZTOOL_PAGE_CONFIG.revenue.type.product &&
        eachTable.products.map((eachRow) => (
          <BiztoolRow
            key={eachTable._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance &&
        eachTable.debt_issuances.map((eachRow) => (
          <BiztoolRow
            key={eachTable._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution &&
        eachTable.equity_contributions.map((eachRow) => (
          <BiztoolRow
            key={eachTable._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment &&
        eachTable.equity_repayments.map((eachRow) => (
          <BiztoolRow
            key={eachTable._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      <AddRow tableStyle={props.tableStyle} eachTable={props.eachTable} />
    </div>
  );
};

export default BiztoolTable;
