import React, { useState } from 'react'
import './createNewProject.css'
import { useSelector } from 'react-redux'
import AttributeExplaination from './attributeExplanation'
import CPTPage from './cptPage'
import INPUT_TYPES from '../comparePage/createProjectInputTypes'

const CreateNewProject = (props) => {
  const createProject = useSelector(state => state.projects.shallowCreateProject)
  const [currentStep, setCurrentStep] = useState(createProject.name === 'เทมเพลตเปล่า' ? 0 : 1)
  const stepHeader = [
    "ประเภทธุรกิจของคุณ",
    "ข้อมูลพื้นฐานเกี่ยวกับธุรกิจของคุณ",
    "วันเริ่มต้นธุรกิจและระยะเวลาในการประเมินธุรกิจ",
    "สกุลเงิน, อัตราภาษีและอัตราเงินคิดลด",
    "อัตรายอดขายในแต่ละปี",
    "รูปภาพโลโกของธุรกิจ",
  ]
  const onStepChange = (destinationNumber) => {
    if (destinationNumber >= 0) setCurrentStep(destinationNumber)
  }

  const createProjectSubmit = (data) => {
    console.log('create porject');
    console.log(data);
  }

  const onInputChange = (type, val) => {
    let shallowCreateProject = createProject
    if (type === INPUT_TYPES.industry) {
      shallowCreateProject = {...shallowCreateProject, industry_ids: val}
    }
    if (type === INPUT_TYPES.description) {
      shallowCreateProject = {...shallowCreateProject, description: val}
    }
    if (type === INPUT_TYPES.name) {
      shallowCreateProject = {...shallowCreateProject, name: val}
    }
    if (type === INPUT_TYPES.startDate) {
      shallowCreateProject = {...shallowCreateProject, model_config: {...shallowCreateProject.model_config, start_date: val}}
    }
    if (type === INPUT_TYPES.projectionPeriod) {
      shallowCreateProject = {...shallowCreateProject, model_config: {...shallowCreateProject.model_config, projection_period: val}}
    }
    if (type === INPUT_TYPES.currency) {
      shallowCreateProject = {...shallowCreateProject, model_config: {...shallowCreateProject.model_config, currency_id: val}}
    }
    if (type === INPUT_TYPES.taxRate) {
      shallowCreateProject = {...shallowCreateProject, model_config: {...shallowCreateProject.model_config, income_tax_rate: val}}
    }
    if (type === INPUT_TYPES.discountRate) {
      shallowCreateProject = {...shallowCreateProject, model_config: {...shallowCreateProject.model_config, discounting_rate: val}}
    }
    if (type === INPUT_TYPES.saleTrend) {
      shallowCreateProject = {...shallowCreateProject, sale_trends: val}
    }
    if (type === INPUT_TYPES.picture) {
      shallowCreateProject = {...shallowCreateProject, logo_url: val}
    }
  }

  return (
    <div className='border m-3 mt-5'>
      <div className='border fw-bold'>สร้างโปรเจกธุรกิจใหม่</div>
      <div className='fw-bold'>{`ขั้นตอนที่ ${currentStep}/5 :`}</div>
      <div className='step-header-style'>{stepHeader[currentStep]}</div>
      <div className=''>
        <div className='d-flex'>
          {currentStep === 0 ?
            <CPTPage onInputChange={onInputChange} data={createProject} inputs={[INPUT_TYPES.industry]}
              description={<AttributeExplaination industry={true} />} /> :
            currentStep === 1 ?
              <CPTPage onInputChange={onInputChange} data={createProject} inputs={[INPUT_TYPES.name, INPUT_TYPES.description]}
                description={<AttributeExplaination nameDescription={true} />} /> :
              currentStep === 2 ?
                <CPTPage onInputChange={onInputChange} data={createProject} inputs={[INPUT_TYPES.startDate, INPUT_TYPES.projectionPeriod]}
                  description={<AttributeExplaination startDateProjectionPeriod={true} />} /> :
                currentStep === 3 ?
                  <CPTPage onInputChange={onInputChange} data={createProject} inputs={[INPUT_TYPES.currency,INPUT_TYPES.taxRate,INPUT_TYPES.discountRate]}
                    description={<AttributeExplaination currencyTaxDiscount={true} />} /> :
                  currentStep === 4 ?
                    <CPTPage onInputChange={onInputChange} data={createProject} inputs={[INPUT_TYPES.saleTrend]}
                      description={<AttributeExplaination saleTrend={true} />} /> :
                    <CPTPage onInputChange={onInputChange} data={createProject} inputs={[INPUT_TYPES.picture]}
                      description={<AttributeExplaination picture={true} />} />
          }
        </div>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100px', width: '1000px' }}>
          <button onClick={() => onStepChange(currentStep - 1)}>
            ย้อนกลับ
          </button>
          {currentStep <= 4 ?
            <button onClick={() => onStepChange(currentStep + 1)}>
              ถัดไป
            </button> :
            <button onClick={() => createProjectSubmit(currentStep + 1)}>
              สร้างโปรเจก
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default CreateNewProject