import React from 'react'
import timeToShow from '../../components/common/timeToShow'
import INPUT_TYPES from '../comparePage/createProjectInputTypes'
import './createNewProject.css'

const CPTPage = (props) => {
    let onInputChange = props.onInputChange
    return (
        <div className='d-flex' style={{ maxHeight: '500px' }}>
            <div className='create-project-inputs-style'>
                {props.inputs.map((eachInputType) =>
                    <div>
                        {eachInputType === INPUT_TYPES.industry &&
                            <div>
                                <div className='each-cp-input-header'>ธุรกิจของคุณอยู่ในหมวดอะไร</div>
                                <div>industry</div>
                            </div>
                        }
                        {eachInputType === INPUT_TYPES.name &&
                            <div>
                                <div className='each-cp-input-header'>โปรเจกธุรกิจของคุณชื่ออะไร?</div>
                                <input
                                    className='each-cp-text-input'
                                    type='text'
                                    value={props.data.name}
                                    onChange={(e) => onInputChange(INPUT_TYPES.name, e.target.value)}
                                />
                            </div>
                        }
                        {eachInputType === INPUT_TYPES.description &&
                            <div>
                                <div className='each-cp-input-header'>รายละเอียดสั้น ๆ เกี่ยวกับธุรกิจนี้ (ไม่บังคับ)</div>
                                <input
                                    className='each-cp-text-input'
                                    type="textarea"
                                    value={props.data.description}
                                    onChange={(e) => onInputChange(INPUT_TYPES.description, e.target.value)}
                                />
                            </div>
                        }
                        {eachInputType === INPUT_TYPES.startDate &&
                            <div>
                                <div className='each-cp-input-header'>วันที่เริ่มทำธุรกิจ</div>
                                <input
                                    className='each-cp-text-input'
                                    type='date'
                                    value={timeToShow("input-date", props.data.model_config.start_date)}
                                    onChange={(e) => onInputChange(INPUT_TYPES.startDate, e.target.value)}
                                />
                            </div>
                        }
                        {eachInputType === INPUT_TYPES.projectionPeriod &&
                            <div>
                                <div className='each-cp-input-header'>คุณต้องการประมาณการเงินของธุรกิจเป็นระยะเวลากี่ปี?</div>
                                <input
                                    className='each-cp-text-input'
                                    type='text'
                                    value={props.data.model_config.projection_period}
                                    onChange={(e) => onInputChange(INPUT_TYPES.projectionPeriod, e.target.value)}
                                />
                            </div>
                        }
                        {eachInputType === INPUT_TYPES.currency &&
                            <div>
                                <div className='each-cp-input-header'>คุณต้องการให้แสดงในระบบแสดงสกลุเงินอะไร?</div>
                                <div>Currrency</div>
                            </div>
                        }
                        {eachInputType === INPUT_TYPES.taxRate &&
                            <div>
                                <div className='each-cp-input-header'>อัตราการเสียภาษีเงินได้เป็นเท่าไร?</div>
                                <input
                                    type='text'
                                    value={props.data.model_config.income_tax_rate}
                                    onChange={(e) => onInputChange(INPUT_TYPES.taxRate, e.target.value)}
                                />
                            </div>
                        }
                        {eachInputType === INPUT_TYPES.discountRate &&
                            <div>
                                <div className='each-cp-input-header'>อัตราเงินคิดลดของธุรกิจเป็นเท่าไร?</div>
                                <input
                                    type='text'
                                    value={props.data.model_config.discounting_rate}
                                    onChange={(e) => onInputChange(INPUT_TYPES.discountRate, e.target.value)}
                                />
                            </div>
                        }
                        {eachInputType === INPUT_TYPES.saleTrend &&
                            <div>
                                <div className='each-cp-input-header'>เปอร์เซ็นแน้วโน้มยอดขายในแต่ละปี</div>
                                <div>sale-trend</div>
                            </div>
                        }
                        {eachInputType === INPUT_TYPES.picture &&
                            <div>
                                <div className='each-cp-input-header'>รูปภาพปัจจุบัน</div>
                                <div>{props.data.logo_url}</div>
                            </div>
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