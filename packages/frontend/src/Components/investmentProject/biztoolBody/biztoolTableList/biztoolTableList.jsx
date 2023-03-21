import React, { useEffect } from 'react'
import BiztoolTable from './biztoolTable/biztoolTable'
const BiztoolTableList = (props) => {

  return (
    <div>
      {Array.isArray(props.data) ?
        props.data.map((eachTable) =>
          <BiztoolTable
            onCellChange={props.onCellChange}
            key={eachTable._id}
            eachTable={eachTable}
            type={props.type}
            tableStyle={props.tableStyle}
            onChangeHandle={props.onChangeHandle}
          />
        ) : [].map((eachTable) =>
          <BiztoolTable
            onCellChange={props.onCellChange}
            key={eachTable._id}
            eachTable={eachTable}
            type={props.type}
            tableStyle={props.tableStyle}
            onChangeHandle={props.onChangeHandle}
          />
        )}
    </div>
  )
}

export default BiztoolTableList