import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./biztoolTable.css";
import BIZTOOL_PAGE_CONFIG from "../../../../../pages/bizTools/pageConfig";

const BiztoolTable = (props) => {
  const columnStyles = props.tableStyle.column.map((each) => ({
    width: each.width,
    color: each.color,
    type: each.type,
    backgroundColor: each.backgroundColor,
  }));

  const eachTable = props.eachTable;

  const [addRowState, setAddRowState] = useState(false);

  const addRowHandle = (tableId) => {
    // alert(`add row! ${tableId}`)
    setAddRowState(true);
  };
  const onChangeHandle = (row, col, val) => {
    props.onChangeHandle(eachTable._id, row, val);
  };

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
        <div className="">
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
              <div className="d-flex flex-row">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={eachRow.title}
                  onSelect={(valueKey) =>
                    onChangeHandle(eachRow.account_id, valueKey)
                  }
                  style={{
                    width: `${columnStyles[2].width}px`,
                  }}
                >
                  {props.tableStyle.column[2].enumData.map((option) => (
                    <Dropdown.Item
                      eventKey={option.value}
                      style={{
                        width: `${columnStyles[2].width}px`,
                      }}
                    >
                      {option.title}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>

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
        <div className="">
          {eachTable.fixed_costs.map((eachRow) => (
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
              <input
                key={eachRow._id}
                type="money"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[2].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.cost_increase}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[3].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.period_id}
              />
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[4].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.cost_increase_period_id}
              />
            </div>
          ))}
        </div>
      )}

      {props.type == BIZTOOL_PAGE_CONFIG.revenue.type.service && (
        <div className="">
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
        <div className="">
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
        <div className="">
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
        <div className="">
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
        <div className="">
          {eachTable.debt_issuances.map((eachRow) => (
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

      {addRowState == true && (
        <div key={eachTable.tableId} className="d-flex">
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
                    placeholder={eachColumn.title}
                  />
                </div>
              )}

              {console.log("eachColumn >>>")}
              {console.log(eachColumn)}
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
        <div className="d-flex" onClick={() => addRowHandle(props.tableId)}>
          <div className="mx-2">
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

export default BiztoolTable;
