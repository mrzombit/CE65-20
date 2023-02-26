import React, { useEffect, useState } from 'react'
import './biztoolTable.css'

const BiztoolTable = (props) => {

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
  // const width = props.width

  const onChangeHandle = (row, col, value) => {
    props.onChangeHandle(eachTable.tableId, row, col, value)
  }

  return (
    <div className='mb-4'>
      <div key={eachTable.tableId} className='d-flex'>
        {props.tableStyle.column.map((eachColumn, index) =>
          <>
            {index == 0 &&
              <div key={eachColumn.colId}
                className='column border border-dark'
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachTable.title}
              </div>
            }
            {index !== 0 &&
              <div key={eachColumn.colId}
                className='column border border-dark'
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachColumn.title}
              </div>
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
                {props.tableStyle.column[cellIndex].type == "dropdown" &&
                  <div> Dropdown </div>
                }
              </>
            )}
          </div>
        )}
      </div>
    </div >
  )
}

export default BiztoolTable