import React, { useEffect } from 'react'
import BiztoolTable from './biztoolTable/biztoolTable'
const BiztoolTableList = (props) => {

  return (
    <div>
      {Array.isArray(props.data) ?
        props.data.map((eachTable) =>
          <BiztoolTable
            handleTableOptionFunction={props.handleTableOptionFunction}
            handleRowOptionFunction={props.handleRowOptionFunction}
            handleFunction={props.handleFunction}
            tableHeaderOnChange={props.tableHeaderOnChange}
            addRowHandle={props.addRowHandle}
            onCellChange={props.onCellChange}
            key={eachTable._id}
            eachTable={eachTable}
            type={props.type}
            tableStyle={props.tableStyle}
            setRepaymentPopupStateFunction={props.setRepaymentPopupStateFunction}
          />
        ) : [].map((eachTable) =>
          <BiztoolTable
            handleTableOptionFunction={props.handleTableOptionFunction}
            handleRowOptionFunction={props.handleRowOptionFunction}
            handleFunction={props.handleFunction}
            tableHeaderOnChange={props.tableHeaderOnChange}
            addRowHandle={props.addRowHandle}
            onCellChange={props.onCellChange}
            key={eachTable._id}
            eachTable={eachTable}
            type={props.type}
            tableStyle={props.tableStyle}
            setRepaymentPopupStateFunction={props.setRepaymentPopupStateFunction}
          />
        )}
    </div>
  )
}

export default BiztoolTableList