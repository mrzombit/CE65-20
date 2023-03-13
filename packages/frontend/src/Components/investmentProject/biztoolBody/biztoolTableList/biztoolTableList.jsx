import React from 'react'
import BiztoolTable from './biztoolTable/biztoolTable'
const BiztoolTableList = (props) => {
  return (
    <div >
      {props.data.map((eachTable) =>
        <BiztoolTable
          key={eachTable.tableId}
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