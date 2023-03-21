import React from 'react'

const DropdownCell = (props) => {
  return (
    <div style={{width: `${props.width}px`}}>
      {props.type == 'period-dropdown' &&
        <div>
          period
        </div>
      }
      {props.type == 'cost-increase-dropdown' &&
        <div>
          cost-increase
        </div>
      }
      {props.type == 'asset-account-dropdown' &&
        <div>
          asset-account
        </div>
      }
      {props.type == 'period-dropdown' &&
        <div>
          period
        </div>
      }
    </div>
  )
}

export default DropdownCell