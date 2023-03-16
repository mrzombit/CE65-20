import React from 'react'
import BiztoolTable from './biztoolTable/biztoolTable'

const BiztoolTableList = (props) => {
  // const ÷]
  return (
    <div>
<<<<<<< Updated upstream
      {props.data.map((eachTable) =>
=======
      {/* {JSON.stringify(props.data)} */}
      {/* {props.data != []? props.data.map((eachTable) =>
>>>>>>> Stashed changes
        <BiztoolTable
          key={eachTable.tableId}
          eachTable={eachTable}
          type={props.type}
          tableStyle={props.tableStyle} 
          onChangeHandle={props.onChangeHandle}
          />
      ):"เพิ่มตาราง"} */}
      {Array.isArray(props.data) ?
        props.data.map((eachTable) =>
          <BiztoolTable
            key={eachTable._id}
            eachTable={eachTable}
            type={props.type}
            tableStyle={props.tableStyle}
            onChangeHandle={props.onChangeHandle}
          />
        ) : [].map((eachTable) =>
          <BiztoolTable
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