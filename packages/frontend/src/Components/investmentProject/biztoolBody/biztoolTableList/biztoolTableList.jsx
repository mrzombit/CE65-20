import React, { useEffect } from 'react'
import BiztoolTable from './biztoolTable/biztoolTable'
const BiztoolTableList = (props) => {

  return (
    <div>
      {Array.isArray(props.data) ?
        props.data.map((eachTable) =>
          <BiztoolTable
            tableHeaderOnChange={props.tableHeaderOnChange}
            addRowHandle={props.addRowHandle}
            onCellChange={props.onCellChange}
            key={eachTable._id}
            eachTable={eachTable}
            type={props.type}
            tableStyle={props.tableStyle}
          />
        ) : [].map((eachTable) =>
          <BiztoolTable
            tableHeaderOnChange={props.tableHeaderOnChange}
            addRowHandle={props.addRowHandle}
            onCellChange={props.onCellChange}
            key={eachTable._id}
            eachTable={eachTable}
            type={props.type}
            tableStyle={props.tableStyle}
          />
        )}
    </div>
  )
}

export default BiztoolTableList