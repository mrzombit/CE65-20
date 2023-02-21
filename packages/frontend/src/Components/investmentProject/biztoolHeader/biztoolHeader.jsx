import React from 'react'
import BiztoolAddTable from '../biztoolAddTable/biztoolAddTable'

const BiztoolHeader = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      {props.type != "revenue" && props.type != "project-config" &&
          <BiztoolAddTable
            type={props.type}
            title="+ ตารางใหม่"
            handleFunction={props.handleFunction}
          />
      }
    </div>
  )
}

export default BiztoolHeader