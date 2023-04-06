import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BIZTOOL_PAGE_CONFIG from '../../../../../../pages/bizTools/pageConfig'
import timeToShow from '../../../../../common/timeToShow'

const InputCell = (props) => {
  const selectedProject = useSelector(state => state.projects.selectedProject)

  useEffect(() => {
    
  }, [selectedProject, props.handleFunction])


  return (
    <div>
      <input
        type={props.type === 'date' ? 'date' : 'text'}
        id='this-cell-input'
        className="column border border-primary biztool-input-cell"
        style={{
          width: `${props.width}px`,
          textAlign: `start`,
        }}
        onKeyPress={(props.type === 'number' || props.type === 'money' || props.type === 'date') ? (e) => !/[0-9\b]+/.test(e.key) && e.preventDefault() :
          (props.type === 'percent') ? (e) => !/([0-9\b]*[.])+/.test(e.key) && e.preventDefault() : null}
        onChange={e =>
          props.type === 'date' ?
            props.tableType !== BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment ?
            props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value) :
              props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, {periodId: props.periodId, startDate: e.target.value})
            :
            props.type === 'number' ? props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value) :
              props.type === 'money' ? props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value.replace(',', '')) :
                props.type === 'text' ? props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value) :
                  props.type === 'percent' ? props.onCellChange(props.tableType, props.address.tableId, props.address.rowId, props.colIndex, e.target.value.replace('%', '')) :
                    alert('wrong type')
        }
        value={props.type === 'date' ? timeToShow("input-date",
        props.data):
          props.type === 'number' ? props.data :
            props.type === 'money' ? props.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
              props.type === 'text' ? props.data :
                props.type === 'percent' ? `${props.data}` :
                  'wrong type'
        }
      />

    </div>
  )
}

export default InputCell