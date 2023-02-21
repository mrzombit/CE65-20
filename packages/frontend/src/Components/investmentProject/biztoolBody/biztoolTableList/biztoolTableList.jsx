import React from 'react'
import BiztoolTable from './biztoolTable/biztoolTable'

const BiztoolTableList = (props) => {
  return (
    <div>
    <div>biztoolTableList</div>
    <div>
      <BiztoolTable type={props.type} />
    </div>
    </div>
  )
}

export default BiztoolTableList