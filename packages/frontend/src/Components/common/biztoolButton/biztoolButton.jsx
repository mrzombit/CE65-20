import React from 'react'
import './biztoolButton.css'

const BiztoolButton = (props) => {

  return (
    <div className=''>
      {props.componentStyle === "filled" &&
        <div
          onClick={props.handleFunction(props.data)}
          className='btn filled-biztool-button'
        >
          <div>{props.title}</div>
        </div>}
      {props.componentStyle === "lighted" &&
        <div
          onClick={props.handleFunction}
          className='lighted-biztool-button'
        >
          {props.title}
        </div>}
    </div>
  )
}

export default BiztoolButton