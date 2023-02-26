import React from 'react'
import BiztoolButton from '../../common/biztoolButton/biztoolButton'

const BiztoolAddTable = (props) => {

  return (
    <BiztoolButton
      style="filled"
      type={`add-${props.type}-table`}
      title="+ ตารางใหม่"
      handleFunction={props.handleFunction}
    />
  )
}

export default BiztoolAddTable