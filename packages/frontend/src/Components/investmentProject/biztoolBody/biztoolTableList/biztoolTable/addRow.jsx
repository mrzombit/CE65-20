import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./biztoolTable.css";
import BIZTOOL_PAGE_CONFIG from "../../../../../pages/bizTools/pageConfig";
import { useDispatch, useSelector } from "react-redux";
import BizDropdown from "../../../../bizTools/eachCellTableType/bizDropdown";
import BizEachItemPerYear from "../../../../bizTools/eachCellTableType/bizEachItemPerYear";
import { updateProject } from "../../../../../features/projectsSlice";

const AddRow = (props) => {
  const eachTable = props.eachTable;
  const [addRowState, setAddRowState] = useState(false);

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
      // console.log(e.srcElement);
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
    // alert(`add row! ${JSON.stringify(tableId)}`);
    // console.log(eachTable);
  };

  const handleChange = (event) => {
    setInputVal(event.target.value);

    console.log("value is:", event.target.value);
  };

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

  return (
    <div>
      {addRowState == true && (
        <div className="d-flex">
          {props.tableStyle.column.map((eachColumn, index) => (
            <>
              {index == 0 && (
                <div
                  key={eachColumn.colId}
                  style={{
                    width: `${columnStyles[index].width}px`,
                  }}
                >
                  <input
                    className="column border border-primary"
                    placeholder={eachTable.title}
                    id={eachColumn.colId}
                    name={eachColumn.title}
                    onChange={handleChange}
                    value={inputVal}
                  />
                  
                </div>
              )}
              {index !== 0 && (
                <div
                  key={eachColumn.colId}
                  style={{
                    width: `${columnStyles[index].width}px`,
                  }}
                >
                  <input
                    className="column border border-primary"
                    id={eachColumn.colId}
                    name={eachColumn.title}
                    placeholder={eachColumn.title}
                    onChange={handleChange}
                    value={inputVal}
                  />
                </div>


              )}
              {/* {alert("eachColumn._id" + JSON.stringify(eachColumn.title))} */}
              {/* {alert("EACH_TABLE: " + JSON.stringify(eachTable))} */}
              {/* {alert("TableId: " + JSON.stringify(eachTable._id)+ ", ColId: " + JSON.stringify(eachColumn.colId))} */}
              {/* {alert("table-name: " + JSON.stringify(eachTable.name)+ ", Col-title: " + JSON.stringify(eachColumn.title))} */}
              {/* {alert(`table-name: ${JSON.stringify(eachTable.name)} [${JSON.stringify(eachTable._id)}], Col-title: ${JSON.stringify(eachColumn.title)} [${JSON.stringify(eachColumn.colId)}]`)} */}
            </>
          ))}
        </div>
      )}

      <div
        className="biztool-addrow d-flex align-items-center mx-1"
        style={{
          width: `${
            columnStyles.reduce(function (previousValue, currentValue) {
              return { width: previousValue.width + currentValue.width };
            }).width
          }px`,
        }}
      >
        <div className="d-flex" onClick={() => addRowHandle(eachTable._id)}>
          <div className="mx-2)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>

          <div className=" flex h-100 align-text-center">เพิ่มรายการ</div>
        </div>
      </div>
    </div>
  );
};

export default AddRow;
