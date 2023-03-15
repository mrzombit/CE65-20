/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./infoProject.css";
import BizTextInfo from "../bizTextInfo/bizTextInfo";
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

import BizLogo from "../bizLogo/bizLogo";
import "./infoProject.css";

import { projectUpdated, updateProject } from "../../../features/projectsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WEB_URL } from "../../../webConfig";
import { fetchCurrencyById } from "../../../features/currenciesSlice";
import axios from "axios";
import timeToShow from "../../common/timeToShow";

function infoProject(props) {
  const animatedComponents = makeAnimated();
  const INDUSTRY_CREATE_URL = "http://localhost:5000/industry/post/"
  const CURRENCY_CREATE_URL = "http://localhost:5000/currency/post/"

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const industries = useSelector(state => state.industries.industries)
  const currencies = useSelector(state => state.currencies.currencies)
  const selectedProject = useSelector(state => state.projects.selectedProject)
  const [projectShallow, setProjectShallow] = useState()
  const [industryOptions, setIndustryOptions] = useState([])
  const [currencyOptions, setCurrencyOptions] = useState([])

  const [selectedCurrencyId, setSelectedCurrencyId] = useState(selectedProject.model_config.currency_id)
  const [selectedIndustryIds, setSelectedIndustryIds] = useState(selectedProject.industry_ids)

  const [selectedCurrency, setSelectedCurrency] = useState()
  const [selectedIndustries, setSelectedIndustries] = useState([])

  const [isLoaded, setIsLoaded] = useState(0)
  const [counter, setCounter] = useState(0)
  const [doSubmitCheck, setDoSubmitCheck] = useState(false)
  const round = selectedProject.industry_ids.length

  const [file, setFile] = useState()
  const [imageUrl, setImageUrl] = useState("")
  const [imageName, setImageName] = useState("")
  // const [event, setEvent] = useState()
  const [projectionPeriod, setprojectionPeriod] = useState(selectedProject.model_config.projection_period)
  const [saleTrends, setsaleTrends] = useState(JSON.parse(JSON.stringify(selectedProject.sale_trends)))
  const [selectedBusinessGoals, setselectedBusinessGoals] = useState([])

  const getCurrencyById = async (id) => {
    let shallowSelectedCurrency = {}
    const response = await axios.get(`${CURRENCY_CREATE_URL}${id}`)
      .then(res => {
        shallowSelectedCurrency = [{ value: res.data._id, label: res.data.name.local }]
        setSelectedCurrency(shallowSelectedCurrency)
      })
      .catch(err => false);
  }

  const getIndustryByIds = async (ids) => {
    let shallowSelectedIndustry = selectedIndustries
    await selectedProject.industry_ids.map(id => {
      axios.get(`${INDUSTRY_CREATE_URL}${id}`)
        .then(res => {
          shallowSelectedIndustry.push({ value: res.data._id, label: res.data.name.th })
        })
        .catch(err => false);
    })
    setSelectedIndustries(shallowSelectedIndustry)
  }

  const resetValue = () => {
    setFile(null)
    setCounter(0)
    setIsLoaded(0)
    setImageName("")
    // setEvent()
    setImageUrl("")
    setDoSubmitCheck(false)
  }

  useEffect(() => {
    if (isLoaded < round) {
      getCurrencyById(selectedProject.model_config.currency_id)
      getIndustryByIds(selectedProject.industry_ids)

      const shallowIndustryOptions = industries.map((each) => {
        return { value: each._id, label: each.name.th }
      })
      const shallowCurrencyOptions = currencies.map((each) => {
        return { value: each._id, label: each.name.local }
      })
      setCurrencyOptions(shallowCurrencyOptions)
      setIndustryOptions(shallowIndustryOptions)
      setIsLoaded(isLoaded + 1)
      setCounter(counter + 1)
    }
    else if (imageUrl != "") {
      dispatch(updateProject({ id: selectedProject._id, data: { ...projectShallow, logo_url: imageUrl } }))
      dispatch(projectUpdated({ ...projectShallow, logo_url: imageUrl }))
      resetValue()
    } else if (doSubmitCheck) {
      // alert("!")
      dispatch(updateProject({ id: selectedProject._id, data: projectShallow }))
      dispatch(projectUpdated(projectShallow))
      resetValue()
    }
    setCounter(counter + 1)
    // console.log(JSON.stringify(selectedCurrency));
    // console.log(JSON.stringify(selectedIndustries));
    if (counter == round + 2) {
      alert('welcome')
    }
    // alert("useEffect!")
    // console.log(JSON.stringify(selectedProject));
  }, [isLoaded, selectedCurrency, selectedIndustries, imageUrl, doSubmitCheck, projectionPeriod, saleTrends])

  const doSubmit = (event) => {
    if (file) uploadData()
    const ToUploadProjectShallow = {
      ...selectedProject,
      user_id: selectedProject.user_id,
      name: event.name,
      industry_ids: selectedIndustryIds,
      description: event.description,
      logo_url: imageUrl != '' ? imageUrl : selectedProject.logo_url,
      created_date: selectedProject.created_date,
      modified_date: new Date(),
      model_config: {
        projection_period: projectionPeriod,
        start_date: event.start_date,
        currency_id: selectedCurrencyId,
        working_hours: Number(event.working_hours),
        income_tax_rate: Number(event.income_tax_rate),
        discounting_rate: Number(event.discounting_rate),
      },
      sale_trends: saleTrends,
    }
    // alert(selectedIndustryIds)
    setDoSubmitCheck(true)
    setProjectShallow(ToUploadProjectShallow)
  }

  const uploadData = async () => {
    const formData = new FormData();
    formData.append("image", file);
    axios.post("http://localhost:5000/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(res => {
      setImageUrl(res.data.filename)
    })
  }

  const onUploadChange = (e) => {
    setImageName(e.target.value)
    setFile(e.target.files[0])
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
    }
  }

  const onEachSaleTrendChange = (eachTrend, e) => {

    let shallowEachTrend = eachTrend
    // const shallowSaleTrends = cloneDeep(saleTrends)
    const shallowSaleTrends = saleTrends
    shallowSaleTrends[shallowEachTrend.year - 1].trend = e.target.value ==''?0:Number(e.target.value)
    console.log(shallowSaleTrends)
    setsaleTrends(shallowSaleTrends)
  }

  const onSelectedBuisnessGoalsChange = (e) => {
    setselectedBusinessGoals(e.target.value)

  }

  return (
    <div className="new-invest-form">
      <form onSubmit={handleSubmit(doSubmit)}>
        <div className="d-flex label-newInvest-pj">
          <div>
            <div className="input-container">
              <BizTextInfo title="ชื่อธุรกิจ" />
              <input
                defaultValue={selectedProject.name}
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
                {selectedProject.logo_url == "" ? <BizLogo /> :
                  <div>
                    <div className="LogoImageStyle">
                      <img src={`${WEB_URL}${selectedProject.logo_url}`}
                        className='mw-100 mh-100'
                      />
                    </div>
                    <div>{imageName !== '' ? `รูปโลโกที่เลือก: ${imageName}` : "คุณยังไม่ได้เลือกรูปโลโกใหม่"}</div>
                  </div>
                }
                <div>
                  <button
                    for="getFiles"
                    type="button"
                    className="btn btn-primary"
                    onClick={() => document.getElementById('getFiles').click()}
                  >อัพโหลดรูปภาพ</button>
                  <input
                    name="logo"
                    type="file"
                    id="getFiles"
                    style={{ display: "none" }}
                    onChange={(e) => onUploadChange(e)}
                  />
                </div>
              </div>
              <div className="flex-col">
                <div className="input-container">
                  <BizTextInfo title="วันเริ่มดำเนินธุรกิจ" />
                  <input
                    defaultValue={timeToShow("input-date",
                      selectedProject.model_config.start_date)}
                    className="input-newInvest-pj-xx[small"
                    type="date"
                    {...register('start_date', { required: true })}
                    required
                  />
                  {/* {"oo"} */}
                </div>
                <div className="input-container">
                  <BizTextInfo title="ระยะเวลาประเมินธุรกิจ" />
                  <input
                    defaultValue={selectedProject.model_config.projection_period}
                    onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                    className="input-newInvest-pj-small"
                    type="projection_period"
                    onChange={(e) => onProjectionPeriodChange(e)}
                    required
                  />
                </div>
                <div className="input-container">
                  <BizTextInfo title="สกุลเงิน" />
                  {counter > round + 1 &&
                    <Select
                      defaultValue={selectedCurrency}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      name="currency_id"
                      options={currencyOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) => onCurrencyChange(e)}
                    />
                  }
                </div>
                <div className="input-container">
                  <BizTextInfo title="ชั่วโมงทำงาน/วัน" />
                  <input
                    defaultValue={
                      selectedProject.model_config.working_hours}
                    onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                    // placeholder="8 ชม./วัน"
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
                defaultValue={selectedProject.description}
                className="input-newInvest-pj"
                style={{ height: "143px", width: "250px" }}
                type="description"
                {...register('description', { required: false })}
              />
            </div>
            <BizTextInfo title="ประเภทธุรกิจ" />
            {counter > round + 1 &&
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                defaultValue={selectedIndustries}
                name="industry_ids"
                options={industryOptions}
                className="basic-multi-select min-w-select"
                classNamePrefix="select"
                onChange={(e) => onIndustryChange(e)}
              />
            }
            <div className="d-flex flex-col">
              <div className="input-container">
                <BizTextInfo title="ภาษีเงินได้ (%)" />
                <input
                  defaultValue={selectedProject.model_config.income_tax_rate}
                  onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                  className="input-newInvest-pj-small"
                  type="income_tax_rate"
                  {...register('income_tax_rate', { required: true })}
                  required
                />
              </div>
              <div className="input-container">
                <BizTextInfo title="อัตราเงินคิดลด (%)" />
                <input
                  defaultValue={selectedProject.model_config.discounting_rate}
                  onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                  className="input-newInvest-pj-small"
                  type="discounting_rate"
                  {...register('discounting_rate', { required: true })}
                  required
                />
              </div>
            </div>
            <button type="submit" class="btn login-butt">
              บันทึกการแก้ไข
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
                  value={eachTrend.trend}
                  id={`sale_trends_${eachTrend.year - 1}`}
                  onChange={(e) => onEachSaleTrendChange(eachTrend,e)}
                  // onKeyPress={(e) => !/[0-9\b]+/.test(e.key) && e.preventDefault()}
                  // required
                />
              </div>
            )}
          </div>
          <div className="w-100 ">
            <div className="text-center border border-dark">เป้าหมายธุรกิจ</div>
          </div>
        </div>
      </form >
    </div >
  );
}

export default infoProject;
