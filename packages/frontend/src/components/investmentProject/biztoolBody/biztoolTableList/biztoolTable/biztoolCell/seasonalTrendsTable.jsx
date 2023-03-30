import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './cellStyle.css'

const SeasonalTrendsTable = (props) => {
  const selectedProject = useSelector(state => state.projects.selectedProject)

  useEffect(() => {
  }, [selectedProject, props.handleFunction, props.onCellChange])
  console.log(props.width);
  return (
    <div className='d-flex seasonal-row-style'  >
      {/* {props.data.length} */}
      {props.data.map((each, i) =>
        <input className='seasonal-cell-style'
          value={each}
          onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
          onChange={e =>
            props.onCellChange(
              props.tableType,
              props.address.tableId,
              props.address.rowId,
              props.colIndex,
              { index: i, value: e.target.value }
            )
          }
        />
      )}
    </div>
  )
}

export default SeasonalTrendsTable