import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './biztoolTable.css'

const BiztoolTable = (props) => {

<<<<<<< Updated upstream
  const columnStyles = props.tableStyle.column
    .map((each) =>
    ({
      width: each.width,
      color: each.color,
      type: each.type,
      backgroundColor: each.backgroundColor,
    })
    )

  const eachTable = props.eachTable

  const addRowHandle = () => {
    alert('add row!')
  }
=======
  const eachTable = props.eachTable;

  const [addRowState, setAddRowState] = useState(false);

  const addRowHandle = (tableId) => {
    // alert(`add row! ${tableId}`)
    setAddRowState(true);
  };
>>>>>>> Stashed changes
  const onChangeHandle = (row, col, val) => {
    props.onChangeHandle(eachTable.tableId, row, col, val)
  }

  // const formReduxzdata = props.redux.data
  
  // const onChangeAt = (row,col,val) => {
  //   if props.type == "total-investment":
  //     if columId == 0:
  //           logic  const  change shallowData at columnId
  //           call redux updateAPI shallowData._id with shallowData
  // }


  return (
    <div className='mb-4'>
      <div key={eachTable.tableId} className='d-flex'>
        {props.tableStyle.column.map((eachColumn, index) =>
          <>
<<<<<<< Updated upstream
            {index == 0 &&
=======
            {/* {props.tableStyle.column[cellIndex].type == "cost-table"
              &&
>>>>>>> Stashed changes
              <div key={eachColumn.colId}
                className='column border border-dark'
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachTable.title}
              </div>
<<<<<<< Updated upstream
            }
            {index !== 0 &&
              <div key={eachColumn.colId}
                className='column border border-dark'
=======
            } */}
            {/* {console.log("eachTable >>>")}
            {console.log(eachTable)} */}
            {index == 0 && (
              <div
                key={eachColumn.colId}
                className="column border border-dark"
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachTable.name}
              </div>
            )}
            {index !== 0 && (
              <div
                key={eachColumn.colId}
                className="column border border-dark"
>>>>>>> Stashed changes
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachColumn.title}
              </div>
<<<<<<< Updated upstream
            }
          </>
        )}
      </div>
      <div className=''>
        {eachTable.rowData.map(eachRow =>
          <div key={eachRow.rowId}
            className="d-flex"
          >
            {eachRow.data.map((eachCell, cellIndex) =>
              <>
                {props.tableStyle.column[cellIndex].type == "text" &&
                  <input key={eachCell.colId}
                    type="text"
                    className='column border border-primary'
                    style={{
                      width: `${columnStyles[cellIndex].width}px`,
                    }}
                    value={eachCell.val}
                    onChange={event => onChangeHandle(eachRow.rowId, eachCell.colId, event.target.value)}
                  />}
                {props.tableStyle.column[cellIndex].type == "money" &&
                  <input key={eachCell.colId}
                    type="text"
                    className='column border border-primary'
                    style={{
                      width: `${columnStyles[cellIndex].width}px`,
                      textAlign: `end`,
                    }}
                    value={eachCell.val.toLocaleString('en-US')}
                    onChange={event => onChangeHandle(eachRow.rowId, eachCell.colId, event.target.value)}
                  />}
                {props.tableStyle.column[cellIndex].type == "dropdown" &&
                  <div key={eachCell.colId}
                  >
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
                }
                {props.tableStyle.column[cellIndex].type == "date" &&
                  <div key={eachCell.colId}
                    className="border border-primary rounded"
                    style={{
                      width: `${columnStyles[cellIndex].width}px`,
                    }}
                  >
                    <DatePicker
                      selected={eachCell.val}
                      onChange={(date) => alert(date)}
                      customInput={
                        <div
                          style={{
                            width: `${columnStyles[cellIndex].width}px`,
                          }}
                          className='d-flex align-items-center fill-date-input justify-content-center'
                        >
                          <div className='mx-4'>{eachCell.val.toLocaleDateString("en-US")}</div>
                          <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg>
                          </div>
                        </div>
                      }
                    />
                  </div>
                }
              </>
            )}
          </div>
        )}
      </div>
      <div className='biztool-addrow d-flex align-items-center mx-1'
=======
            )}
            {/* {
              <div key={eachColumn.colId}
                className='column border border-dark'
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachTable.title}
              </div>
            } */}
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
              <input
                key={eachRow._id}
                type="text"
                className="column border border-primary"
                style={{
                  width: `${columnStyles[2].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.account_id}
              />
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
                  width: `${columnStyles[3].width}px`,
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
                  width: `${columnStyles[3].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.cost_increase_period_id}
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
                  width: `${columnStyles[3].width}px`,
                  textAlign: `start`,
                }}
                value={eachRow.cost_increase_period_id}
              />
            </div>
          ))}
        </div>
      )}

      {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution && (
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
>>>>>>> Stashed changes
        style={{
          width: `${columnStyles.reduce(function (previousValue, currentValue) {
            return { width: previousValue.width + currentValue.width, }
          }).width}px`,
        }}
      >
<<<<<<< Updated upstream
        <div className='mx-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </div>
        <div className=' flex h-100 align-text-center'
          onClick={() => addRowHandle()}
        >เพิ่มรายการ
=======
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
>>>>>>> Stashed changes
        </div>
      </div>
    </div >
  )
}

export default BiztoolTable