import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector } from 'react-redux';

const DropdownCell = (props) => {
  const periods = useSelector(state => state.periods.periods)
  const assetAccounts = useSelector(state => state.assetAccounts.assetAccounts)
  const [dropdownOptions, setDropdownOptions] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState({
    value: props.data,
    label: periods.find(each => props.data == each._id)
  })
  const [selectedCostInceasePeriod, setSelectedCostInceasePeriod] = useState({
    value: props.data.cost_increase_period_id,
    label: periods.find(each => props.data.cost_increase_period_id == each._id)
  })
  const [selectedAssetAccount, setSelectedAssetAccount] = useState({
    value: props.data,
    label: assetAccounts.find(each => props.data == each._id)
  })

  useEffect(() => {
    if (!isLoaded) {
      let shallowOptions = []
      if (props.type !== 'asset-account-dropdown') {
        shallowOptions = periods.map(each => {
          return { value: each._id, label: each.name.th }
        })
      }
      else if (props.type == 'asset-account-dropdown') {
        shallowOptions = assetAccounts.map(each => {
          return { value: each._id, label: each.name.th }
        })
      }
      setDropdownOptions(shallowOptions)
      setIsLoaded(true)
    }
  }, [dropdownOptions])

  return (
    <div style={{ width: `${props.width}px` }}>
      {props.type == 'period-dropdown' &&
        <Dropdown
          onSelect={(valueKey) => props.onCellChange(props.type, props.address.tableId, props.address.rowId, props.colIndex, valueKey)}
          style={{
            width: `${props.width}px`,
          }}
        >
          <Dropdown.Toggle id="dropdown-autoclose-true">
            {selectedPeriod.label.name.th}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {dropdownOptions && dropdownOptions.map((option) => (
              <Dropdown.Item
                eventKey={option.value}
                style={{
                  width: `${props.width}px`,
                }}
              >
                {option.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      }
      {props.type == 'cost-increase-dropdown' &&
        <div className='d-flex'>
          <input
            type='text'
            value={props.data.cost_increase}
            onChange={e => props.onCellChange(props.type, props.address.tableId, props.address.rowId, e.target.value)}
          />
          <Dropdown
            onSelect={(valueKey) => props.onCellChange(props.type, props.address.tableId, props.address.rowId, props.colIndex, valueKey)}
            style={{
              width: `${props.width}px`,
            }}
          >
            <Dropdown.Toggle id="dropdown-autoclose-true">
              {selectedCostInceasePeriod.label.name.th}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownOptions && dropdownOptions.map((option) => (
                <Dropdown.Item
                  eventKey={option.value}
                  style={{
                    width: `${props.width}px`,
                  }}
                >
                  {option.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      }
      {props.type == 'asset-account-dropdown' &&
        <Dropdown
        onSelect={(valueKey) => props.onCellChange(props.type, props.address.tableId, props.address.rowId, props.colIndex, valueKey)}
        style={{
          width: `${props.width}px`,
        }}
      >
        <Dropdown.Toggle id="dropdown-autoclose-true">
          {selectedAssetAccount.label.name.th}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {dropdownOptions && dropdownOptions.map((option) => (
            <Dropdown.Item
              eventKey={option.value}
              style={{
                width: `${props.width}px`,
              }}
            >
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      }
    </div>
  )
}

export default DropdownCell