import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import timeToShow from '../../../../../common/timeToShow'

const InputCell = (props) => {
  const selectedProject = useSelector(state => state.projects.selectedProject)

  useEffect(() => {
    console.log('InputCell.jsx is rerendered');
  }, [selectedProject])
  

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
        onKeyPress={(props.type == 'number'|| props.type == 'money' || props.type =='percent')?(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault():null}
        onChange={e =>
          props.type == 'date' ? props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value) :
            props.type == 'number' ? props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value) :
              props.type == 'money' ? props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value.replace(',','')) :
                props.type == 'text' ? props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value) :
                  props.type == 'percent' ? props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value.replace('%','')) :
                    alert('wrong type')
        }
        value={props.type == 'date' ? props.data :
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