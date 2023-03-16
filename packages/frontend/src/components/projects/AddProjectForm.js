import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import './AddProjectForm.css'

import BizTextInfo from "../bizTools/bizTextInfo/bizTextInfo";
import BizLogo from "../bizTools/bizLogo/bizLogo";
import ProjectTempleteCard from "./projectTempleteCard/projectTempleteCard";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addNewProject, setSelectedProject } from "../../features/projectsSlice";

const AddProjectForm = () => {
  const animatedComponents = makeAnimated();

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const industries = useSelector(state => state.industries.industries)
  const currencies = useSelector(state => state.currencies.currencies)
  const user_id = useSelector(state => state.users.user._id)
  const [industryOptions, setIndustryOptions] = useState([])
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [selectedCurrencyId, setSelectedCurrencyId] = useState()
  const [selectedIndustryIds, setSelectedIndustryIds] = useState([])

  const [file, setFile] = useState()
  const [imageUrl, setImageUrl] = useState("")
  const [event, setEvent] = useState()
  const [projectionPeriod, setprojectionPeriod] = useState(0)
  const [saleTrends, setsaleTrends] = useState([])
  const [selectedBusinessGoals, setselectedBusinessGoals] = useState([])

  useEffect(() => {
    if (imageUrl == "") {
      const shallowIndustryOptions = industries.map((each) => {
        return { value: each._id, label: each.name.th }
      })
      const shallowCurrencyOptions = currencies.map((each) => {
        return { value: each._id, label: each.name.local }
      })
      setIndustryOptions(shallowIndustryOptions)
      setCurrencyOptions(shallowCurrencyOptions)
    }
    else {
      const projectShallow = {
        user_id: user_id,
        name: event.name,
        industry_ids: selectedIndustryIds,
        description: event.description,
        logo_url: imageUrl,
        created_date: new Date(),
        modified_date: new Date(),
        sale_trends: saleTrends,
        business_goals: [],
        model_config: {
          projection_period: Number(event.projection_period),
          start_date: event.start_date,
          currency_id: selectedCurrencyId,
          working_hours: Number(event.working_hours),
          income_tax_rate: Number(event.income_tax_rate),
          discounting_rate: Number(event.discounting_rate),
        },
        revenue: {
          service_tables: [],
          product_tables: [],
        },
        expense: {
          investment_tables: [],
          fixed_cost_tables: [],
        },
        miscellaneous: {
          equity_contribution: [],
          equity_repayment: [],
          debt_issuance: [],
          ffcReason: "",
        }
      }
      dispatch(addNewProject(projectShallow))
      dispatch(setSelectedProject(projectShallow))
      navigate('/ProjectConfig')
    }
  }, [industries, currencies, imageUrl, projectionPeriod])

  const doSubmit = (data) => {
    uploadData(data)
  }

  const uploadData = (data) => {
    const formData = new FormData();
    formData.append("image", file);
    axios.post("http://localhost:5000/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(res => {
      setImageUrl(res.data.filename)
      setEvent(data)
    })
  }


  const onUploadChange = (e) => {
    setFile(e.target.files[0])
  }

  const onProjectionPeriodChange = (e) => {
    let shallowSaleTrends = []
    if (e.target.value != '') {
      for (let i = 0; i < e.target.value; i++) {
        if (i <= projectionPeriod - 1) {
          shallowSaleTrends.push(saleTrends[i])
        }
        else {
          let shallowSaleTrend = {
            year: i + 1,
            trend: 0,
            description: "",
          }
          shallowSaleTrends.push(shallowSaleTrend)
        }
      }
      setsaleTrends(shallowSaleTrends)
      setprojectionPeriod(e.target.value)
      console.log(saleTrends);
    }
  }

  const onEachSaleTrendChange = (year, val) => {
    let shallowSaleTrends = saleTrends
    shallowSaleTrends[year - 1].trend = val
    setsaleTrends(shallowSaleTrends)
    alert(JSON.stringify(shallowSaleTrends))
  }

  const onSelectedBuisnessGoalsChange = (e) => {
    setselectedBusinessGoals(e.target.value)

  }

  const onCurrencyChange = (e) => {
    setSelectedCurrencyId(e.value)
  }

  const onIndustryChange = (e) => {
    const shallowSelectedIndustryIds = e.map((each) => {
      return each.value
    })
    setSelectedIndustryIds(shallowSelectedIndustryIds)
  }

  return (
    <div className="new-invest-form">
      <form onSubmit={handleSubmit(doSubmit)}>
        <div className="d-flex label-newInvest-pj">

          <div>
            <div className="input-container">
              <BizTextInfo title="ชื่อธุรกิจ" />
              <input
                className="input-newInvest-pj"
                style={{ width: "280px" }}
                type="name"
                {...register('name', { required: true })}
                required
              />
            </div>
            <div className="d-flex flex-col">
              <div className="input-container ">
                <div className="label-newInvest-pj">โลโก้ธุรกิจ </div>
                <BizLogo />
                <div>
                  <button
                    for="getFiles"
                    type="button"
                    className="btn btn-primary"
                    onClick={() => document.getElementById('getFiles').click()}
                  >อัพโหลดรูปภาพ</button>
                  <input
                    type="file"
                    id="getFiles"
                    style={{ display: "none" }}
                    onChange={(e) => onUploadChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="flex-col">
                <div className="input-container">
                  <BizTextInfo title="วันเริ่มดำเนินธุรกิจ" />
                  <input
                    placeholder="MM/DD/YYYY"
                    className="input-newInvest-pj-small"
                    type="date"
                    // onClick={() => ca}
                    {...register('start_date', { required: true })}
                    required
                  />
                </div>
                <div className="input-container">
                  <BizTextInfo title="ระยะเวลาประเมินธุรกิจ" />
                  <input
                    onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                    placeholder="เช่น 5 ปี"
                    className="input-newInvest-pj-small"
                    type="projection_period"
                    {...register('projection_period', { required: true })}
                    onChange={(e) => onProjectionPeriodChange(e)}
                    required
                  />
                </div>
                <div className="input-container">
                  <BizTextInfo title="สกุลเงิน" />

                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    name="currency_id"
                    options={currencyOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => onCurrencyChange(e)}
                  />
                </div>
                <div className="input-container">
                  <BizTextInfo title="ชั่วโมงทำงาน/วัน" />
                  <input
                    onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                    placeholder="8 ชม./วัน"
                    className="input-newInvest-pj-small"
                    type="working_hours"
                    {...register('working_hours', { required: true })}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="input-container">
              <BizTextInfo title="คำอธิบายเกี่ยวกับธุรกิจ" />
              <textarea
                className="input-newInvest-pj"
                style={{ height: "143px", width: "250px" }}
                type="description"
                {...register('description', { required: false })}
              />
            </div>
            <BizTextInfo title="ประเภทธุรกิจ" />
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              name="industry_ids"
              options={industryOptions}
              className="basic-multi-select min-w-select"
              classNamePrefix="select"
              onChange={(e) => onIndustryChange(e)}
            />
            {/* <label class="form-label select-label">Example label</label> */}
            <div className="d-flex flex-col">
              <div className="input-container">
                <BizTextInfo title="ภาษีเงินได้ (%)" />
                <input
                  onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                  placeholder="15%"
                  className="input-newInvest-pj-small"
                  type="income_tax_rate"
                  {...register('income_tax_rate', { required: true })}
                  required
                />
              </div>
              <div className="input-container">
                <BizTextInfo title="อัตราเงินคิดลด (%)" />
                <input
                  onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                  placeholder="8%"
                  className="input-newInvest-pj-small"
                  type="discounting_rate"
                  {...register('discounting_rate', { required: true })}
                  required
                />
              </div>
            </div>
            <button type="submit" class="btn login-butt">
              สร้างโปรเจก
            </button>
          </div>
        </div >
        <div className="d-flex mt-2">
          <div className="w-100 ">
            <div className="text-center border border-primary">แนวโน้มยอดขาย</div>
            {saleTrends.map((eachTrend) =>
              <div className="d-flex">
                <div className="w-50 sale-trend-box">{`ปีที่ ${eachTrend.year}`}</div>
                <input
                  className="sale-trend-input"
                  type='sale_trends'
                  id={`sale_trends_${eachTrend.year-1}`}
                  onChange={(e) => onEachSaleTrendChange(eachTrend.year, e.target.value)}
                  onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                  {...register(`sale_trends_${eachTrend.year-1}`, { required: true })}
                  required
                />
              </div>
            )}
          </div>
          <div className="w-100 ">
            <div className="text-center border border-dark">เป้าหมายธุรกิจ</div>
          </div>
        </div>
        
      </form >
      <hr></hr>
      <div>สร้างโปรเจคธุรกิจจากเทมเพลตที่มี</div>
      <div className="template-scroll">
        <div>
          <ProjectTempleteCard />
        </div>
        <div>
          <ProjectTempleteCard />
        </div>
        <div>
          <ProjectTempleteCard />
        </div>
        <div>
          <ProjectTempleteCard />
        </div>
        <div>
          <ProjectTempleteCard />
        </div>
        <div>
          <ProjectTempleteCard />
        </div>
        <div>
          <ProjectTempleteCard />
        </div>
      </div>
    </div >
  );
};
export default AddProjectForm;
