import React from 'react'
import INPUT_TYPES from '../comparePage/createProjectInputTypes'
import './createNewProject.css'

const CPTPage = (props) => {
    let onInputChange = props.onInputChange
    return (
        <div className='d-flex' style={{maxHeight: '500px'}}>
            <div className='create-project-inputs-style'>
                {props.inputs.map((eachInputType) =>
                    <div>
                        {eachInputType === INPUT_TYPES.industry &&
                            <div>industry</div>
                        }
                        {eachInputType ===  INPUT_TYPES.description &&
                            <input
                                type='text'
                                value={props.data.description}
                                onChange={(e) => onInputChange( INPUT_TYPES.description,e.target.value)}
                            />
                        }
                        {eachInputType ===  INPUT_TYPES.name &&
                            <input
                            type='text'
                            value={props.data.name}
                            onChange={(e) => onInputChange( INPUT_TYPES.name , e.target.value)}
                        />
                        }
                        {eachInputType === INPUT_TYPES.startDate &&
                            <input
                            type='date'
                            value={props.data.start_date}
                            onChange={(e) => onInputChange( INPUT_TYPES.startDate , e.target.value)}
                        />
                        }
                        {eachInputType ===  INPUT_TYPES.projectionPeriod &&
                            <input
                            type='text'
                            value={props.data.start_date}
                            onChange={(e) => onInputChange( INPUT_TYPES.projectionPeriod , e.target.value)}
                            />
                        }
                        {eachInputType ===  INPUT_TYPES.currency  &&
                            <div>currency</div>
                        }
                        {eachInputType ===  INPUT_TYPES.taxRate &&
                            <input
                            type='text'
                            value={props.data.income_tax_rate}
                            onChange={(e) => onInputChange( INPUT_TYPES.taxRate , e.target.value)}
                            />
                        }
                        {eachInputType ===  INPUT_TYPES.discountRate &&
                           <input
                           type='text'
                           value={props.data.discounting_rate}
                           onChange={(e) => onInputChange( INPUT_TYPES.discountRate , e.target.value)}
                           />
                        }
                        {eachInputType ===  INPUT_TYPES.saleTrend &&
                            <div>sale-trend</div>
                        }
                        {eachInputType ===  INPUT_TYPES.picture &&
                            <div>{props.data.logo_url}</div>
                        }
                    </div>)}
            </div>
            <div style={{ width: "2px", height: "500px", backgroundColor: "#12aafc" }}></div>
            <div className='create-project-descriptions-style'>
                คำอธิบายเกี่ยวกับ Input ...
                {props.description}
            </div>
        </div>
    )
}

export default CPTPage