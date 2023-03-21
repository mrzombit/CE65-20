import React from 'react'
import timeToShow from '../../../../../common/timeToShow'

const InputCell = (props) => {

  return (
    <div>
      <input
        type={props.type == 'date' ? 'date' : 'text'}
        // type='text'
        className="column border border-primary"
        style={{
          width: `${props.width}px`,
          textAlign: `start`,
        }}
        onChange={e =>
          props.type == 'date' ? props.onCellChange(props.type, props.address.tableId, props.address.rowId, props.colIndex, e.target.value) :
            props.type == 'number' ? props.onCellChange(props.type, props.address.tableId, props.address.rowId, props.colIndex, e.target.value) :
              props.type == 'money' ? props.onCellChange(props.type, props.address.tableId, props.address.rowId, props.colIndex, e.target.value.replace(',','')) :
                props.type == 'text' ? props.onCellChange(props.type, props.address.tableId, props.address.rowId, props.colIndex, e.target.value) :
                  props.type == 'percent' ? props.onCellChange(props.type, props.address.tableId, props.address.rowId, props.colIndex, e.target.value.replace('%','')) :
                    alert('wrong type')
        }
        value={props.type == 'date' ? `${timeToShow('input-date',props.data.toString())}` :
          props.type == 'number' ? props.data :
            props.type == 'money' ? props.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
              props.type == 'text' ? props.data :
                props.type == 'percent' ? `${props.data}%` :
                  'wrong type'
        }
      />

    </div>
  )
}

export default InputCell