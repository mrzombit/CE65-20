import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./biztoolTable.css";
import BIZTOOL_PAGE_CONFIG from "../../../../../pages/bizTools/pageConfig";
import { useDispatch, useSelector } from "react-redux";
import BizDropdown from "../../../../bizTools/eachCellTableType/bizDropdown";
import BizEachItemPerYear from "../../../../bizTools/eachCellTableType/bizEachItemPerYear";
import { updateProject } from "../../../../../features/projectsSlice";
import AddRow from "./addRow";

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

      {props.type == BIZTOOL_PAGE_CONFIG.totalInvestment.type.page && (
        <div className="row" key={eachTable._id}>
          {eachTable.investments.map((eachRow) => (
            <div>
              {/* {JSON.stringify(eachRow.name)} */}
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[0].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.name}
              />
              <input
                key={eachRow._id}
                type="money"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[1].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.amount}
              />

              <BizDropdown />

              {/* <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[2].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.account_id}
              /> */}

              {/* {props.tableStyle.column[cellIndex].type == "dropdown" && <div> Dropdown </div> <div key={eachCell.colId}  >
                    <DropdownButton id="dropdown-basic-button"
                      title={eachCell.val}
                      onSelect={(valueKey) => onChangeHandle(eachRow.rowId, eachCell.colId, valueKey)}
                      style={{
                        width: `${columnStyles[cellIndex].width}px`,
                      }}
                    >
                      {props.tableStyle.column[cellIndex].enumData.map((option) => (
                        <Dropdown.Item eventKey={option.value}
                          style={{
                            width: `${columnStyles[cellIndex].width}px`,
                          }}
                        >
                          {option.title}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </div>
                } */}

              {/* <DropdownButton
                  className="row"
                  id="dropdown-basic-button"
                  title={selectDropdown}
                  onSelect={(valueKey) =>
                    onChangeHandle(props.tableId, eachRow._id, valueKey)
                  }
                  style={{
                    width: `${columnStyles[2].width}px`,
                    textAlign: `start`,
                  }}
                >
                  <Dropdown.Item eventKey={assetAccountseData[0].name.th}>
                    {assetAccountseData[0].name.th}
                  </Dropdown.Item>
                  <Dropdown.Item eventKey={assetAccountseData[1].name.th}>
                    {assetAccountseData[1].name.th}
                  </Dropdown.Item>
                  <Dropdown.Item eventKey={assetAccountseData[2].name.th}>
                    {assetAccountseData[2].name.th}
                  </Dropdown.Item>
                </DropdownButton> */}

              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[3].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.start_date}
              />
            </div>
          ))}
        </div>
      )}

      {props.type == BIZTOOL_PAGE_CONFIG.operationCost.type.page && (
        <div className="d-flex" key={eachTable._id}>
          <div className="d-flex flex-column">
            {eachTable.fixed_costs.map((eachRow) => (
              <div className="d-flex flex-row">
                {/* {JSON.stringify(eachRow.name)} */}
                <input
                  key={eachRow._id}
                  type="text"
                  className="d-flex flex-row border border-primary"
                  style={{
                    width: `${columnStyles[0].width}px`,
                    textAlign: `start`,
                  }}
                  value={eachRow.name}
                />
                <input
                  key={eachRow._id}
                  type="money"
                  className="d-flex flex-row border border-primary"
                  style={{
                    width: `${columnStyles[1].width}px`,
                    textAlign: `start`,
                  }}
                  value={eachRow.amount}
                />
                <input
                  key={eachRow._id}
                  type="money"
                  className="d-flex flex-row border border-primary"
                  style={{
                    width: `${columnStyles[2].width}px`,
                    textAlign: `start`,
                  }}
                  value={eachRow.cost_increase}
                />
                <input
                  key={eachRow._id}
                  type="text"
                  className="d-flex flex-row border border-primary"
                  style={{
                    width: `${columnStyles[3].width}px`,
                    textAlign: `start`,
                  }}
                  value={eachRow.period_id}
                />

                <BizEachItemPerYear />
              </div>
            ))}
            {/* <div className="d-flex flex-column">
              <BizEachItemPerYear/>
            </div> */}
          </div>
        </div>
      )}

      {props.type == BIZTOOL_PAGE_CONFIG.revenue.type.service && (
        <div className="" key={eachTable._id}>
          {eachTable.services.map((eachRow) => (
            <div>
              {/* {props.type == "percent" && (
                <input
                  key={eachRow._id}
                  type="text"
                  className="column border border-primary"
                  style={{
                    width: `${columnStyles[0].width}px`,
                    textAlign: `start`,
                  }}
                  value={parseFloat(eachRow.cost_increase * 100) + "%"}
                />
              )} */}

              {/* {props.tableStyle.column[cellIndex].type == "dropdown" && (
                <div key={eachCell.colId}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={eachCell.val}
                    onSelect={(valueKey) =>
                      onChangeHandle(eachRow.rowId, eachCell.colId, valueKey)
                    }
                    style={{
                      width: `${columnStyles[cellIndex].width}px`,
                    }}
                  >
                    {props.tableStyle.column[cellIndex].enumData.map(
                      (option) => (
                        <Dropdown.Item
                          eventKey={option.value}
                          style={{
                            width: `${columnStyles[cellIndex].width}px`,
                          }}
                        >
                          {option.title}
                        </Dropdown.Item>
                      )
                    )}
                  </DropdownButton>
                </div>
              )} */}

              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[0].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.name}
              />
              <input
                key={eachRow._id}
                type="money"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[1].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.unit}
              />
              <input
                key={eachRow._id}
                type="money"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[2].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.unit_name}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[3].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.serve_per_unit}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[4].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.revenue_per_service}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[5].width}px`,
                  textAlign: `start`,
                }}
                value={parseFloat(eachRow.cost_per_service * 100) + "%"}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[6].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.price_increase}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[7].width}px`,
                  textAlign: `start`,
                }}
                // value={eachRow.cost_increase}
                value={parseFloat(eachRow.cost_increase * 100) + "%"}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[8].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.start_date}
              />
            </div>
          ))}
        </div>
      )}

      {props.type == BIZTOOL_PAGE_CONFIG.revenue.type.product && (
        <div className="" key={eachTable._id}>
          {eachTable.products.map((eachRow) => (
            <div>
              {/* {JSON.stringify(eachRow.name)} */}
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[0].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.name}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[1].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.days_of_inventory}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[2].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.revenue_per_unit}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[3].width}px`,
                  textAlign: `start`,
                }}
                // value={eachRow.cost_per_service}
                value={parseFloat(eachRow.cost_per_service * 100) + "%"}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[4].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.price_increase}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[5].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.price_increase}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[6].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.price_increase}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[7].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.price_increase}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[8].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.price_increase}
              />
            </div>
          ))}
        </div>
      )}

      {props.type ==
        BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution && (
        <div className="" key={eachTable._id}>
          {eachTable.equity_contributions.map((eachRow) => (
            <div>
              {/* {JSON.stringify(eachRow)} */}
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[0].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.name}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[1].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.amount}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[2].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.date}
              />
            </div>
          ))}
        </div>
      )}
      {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment && (
        <div className="" key={eachTable._id}>
          {eachTable.equity_repayments.map((eachRow) => (
            <div>
              {/* {JSON.stringify(eachRow)} */}
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[0].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.name}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[1].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.share}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[2].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.repayment.start_date}
              />
            </div>
          ))}
        </div>
      )}
      {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance && (
        <div className="" key={[eachTable._id]}>
          {eachTable.debt_issuances.map((eachRow) => (
            <div>
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[0].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.name}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[1].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.amount}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[2].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.payments.date}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[3].width}px`,
                  textAlign: `start`,
                }}
                // value={eachRow.apr}
                value={parseFloat(eachRow.apr * 100) + "%"}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[4].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.name}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[5].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.name}
              />
            </div>
          ))}
        </div>
      )}

      {/* {props.type == `${BIZTOOL_PAGE_CONFIG.revenue.type}-service` && (
        <div className="">
          
          {eachTable.services.map((eachRow) => (
            console.log(eachRow)
            // <div key={eachRow._id} className="d-flex">
            //   <input
            //     // key={eachRow._id}
            //     // type="text"
            //     // className="column border border-primary"
            //     // style={{
            //     //   // width: `${columnStyles[cellIndex].width}px`,
            //     //   width: "200px"
            //     // }}
            //     value={eachRow.name}
            //   />
            //   <input value={eachRow.name} />
            //   <input value={eachRow.unit} />
            //   <input value={eachRow.unit_name} />
            //   <input value={eachRow.serve_per_unit} />
            //   <input value={eachRow.revenue_per_service} />
            //   <input value={eachRow.price_increase} />
            //   <input value={eachRow.price_increase_period_id} />
            //   <input value={eachRow.cost_increase} />
            //   <input value={eachRow.cost_increase_period_id} />
            //   <input value={eachRow.seasonal_trends} />
          
            // </div>
          ))}


        </div>
      )} */}

      <AddRow tableStyle={props.tableStyle} eachTable={props.eachTable} />
    </div>
  );
};

export default BiztoolTable;
