import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BizTextInfo from "../../../components/bizTools/bizTextInfo/bizTextInfo";
import { AiOutlineClose } from "react-icons/ai";
import BizLogo from "../../../components/bizTools/bizLogo/bizLogo";
import ProjectTempleteCard from "../../../components/projects/projectTempleteCard/projectTempleteCard";
import { VscChevronRight } from "react-icons/vsc";

import { projectAdded } from "./projectsSlice";
import { selectAllProjects } from "./projectsSlice";
import { addNewProject } from "./projectsSlice";

const AddProjectForm = () => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("63de88dd7e267c38c5cdf616");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [projectionPeriod, setProjectionPeriod] = useState("");
  const [currencyID, setCurrencyID] = useState("");
  const [workingHours, setWorkingHours] = useState(8);
  const [industryIDs, setIndustryIDs] = useState("");
  const [incomeTaxRate, setIncomeTaxRate] = useState("");
  const [discountingRate, setDiscountingRate] = useState("");

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const projects = useSelector(selectAllProjects);

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onStartDateChanged = (e) => setStartDate(e.target.value);
  const onProjectionPeriodChanged = (e) => setProjectionPeriod(e.target.value);
  const onCurrencyIDChanged = (e) => setCurrencyID(e.target.value);
  const onWorkingHoursChanged = (e) => setWorkingHours(e.target.value);
  const onIndustryIDsChanged = (e) => setIndustryIDs(e.target.value);
  const onIncomeTaxRateChanged = (e) => setIncomeTaxRate(e.target.value);
  const onDiscountingRateChanged = (e) => setDiscountingRate(e.target.value);

  //   const onCreateProjectClicked = () => {
  //     if (name && description) {
  //       dispatch(projectAdded(name, description, userId, startDate,projectionPeriod,currencyID,workingHours,industryIDs,incomeTaxRate,discountingRate));
  //       setName("");
  //       setDescription("");
  //       setStartDate("");
  //       setProjectionPeriod("");
  //       setCurrencyID("");
  //       setWorkingHours("");
  //       setIndustryIDs("");
  //       setIncomeTaxRate("");
  //       setDiscountingRate("");
  //     }
  //   };

  const onCreateProjectClicked = () => {
    try {
      setAddRequestStatus("pending");
      dispatch(
        addNewProject({
          name,
          description,
          userId,
          startDate,
          projectionPeriod,
          currencyID,
          workingHours,
          industryIDs,
          incomeTaxRate,
          discountingRate,
        })
      ).unwrap();

      setName("");
      setDescription("");
      setStartDate("");
      setProjectionPeriod("");
      setCurrencyID("");
      setWorkingHours("");
      setIndustryIDs("");
      setIncomeTaxRate("");
      setDiscountingRate("");
    } catch (err) {
      console.error("Failed to save the post", err);
    } finally {
      setAddRequestStatus("idle");
    }
  };

//   const canSave = Boolean(name) && Boolean(description) && Boolean(userId);

  //   const projectsOptions = projects.map(projects => (
  //       <option key={projects.id} value={projects.id}>
  //           {projects.name}
  //       </option>
  //   ))

  return (
    <div className="new-invest-form">
      <div className="d-flex label-newInvest-pj">
        <form>
          <div className="input-container">
            <BizTextInfo title="ชื่อธุรกิจ" />
            <input
              className="input-newInvest-pj"
              style={{ width: "280px" }}
              type="text"
              name="uname"
              value={name}
              onChange={onNameChanged}
              required
            />
          </div>
          <div className="d-flex flex-col">
            <div className="input-container ">
              {/* <BizTextInfo title="Project Logo"/> */}
              <div className="label-newInvest-pj">โลโก้ธุรกิจ </div>
              <BizLogo />
              {/* <div
                  className="input-newInvest-pj"
                  style={{ height: "160px", width: "160px" }}
                  type="text"
                  name="uname"
                  required
                ></div> */}
            </div>
            <div className="flex-col">
              <div className="input-container">
                <BizTextInfo title="วันเริ่มดำเนินธุรกิจ" />
                <input
                  className="input-newInvest-pj-small"
                  type="text"
                  name="uname"
                  value={startDate}
                  onChange={onStartDateChanged}
                  required
                />
              </div>
              <div className="input-container">
                <BizTextInfo title="ระยะเวลาประเมินธุรกิจ" />
                <input
                  className="input-newInvest-pj-small"
                  type="text"
                  name="uname"
                  value={projectionPeriod}
                  onChange={onProjectionPeriodChanged}
                  required
                />
              </div>
              <div className="input-container">
                <BizTextInfo title="สกุลเงิน" />
                <input
                  className="input-newInvest-pj-small"
                  type="text"
                  name="uname"
                  value={currencyID}
                  onChange={onCurrencyIDChanged}
                  required
                />
              </div>
              <div className="input-container">
                <BizTextInfo title="ชั่วโมงทำงาน/วัน" />
                <input
                  className="input-newInvest-pj-small"
                  type="text"
                  name="uname"
                  value={workingHours}
                  onChange={onWorkingHoursChanged}
                  required
                />
              </div>
            </div>
          </div>
          {/* part2 แนวโน้มยอดขาย*/}
          {/*  */}
        </form>

        <form>
          <div className="input-container">
            <BizTextInfo title="คำอธิบายเกี่ยวกับธุรกิจ" />
            <textarea
              className="input-newInvest-pj"
              style={{ height: "143px", width: "250px" }}
              type="textarea"
              name="uname"
              value={description}
              onChange={onDescriptionChanged}
              required
            />
          </div>
          <div className="input-container">
            <BizTextInfo title="ประเภทธุรกิจ" />
            <input
              className="input-newInvest-pj-small"
              type="text"
              name="pass"
              value={industryIDs}
              onChange={onIndustryIDsChanged}
              required
            />
          </div>
          <div className="d-flex flex-col">
            <div className="input-container">
              <BizTextInfo title="ภาษีเงินได้" />
              <input
                className="input-newInvest-pj-small"
                type="text"
                name="pass"
                value={incomeTaxRate}
                onChange={onIncomeTaxRateChanged}
                required
              />
            </div>
            <div className="input-container">
              <BizTextInfo title="อัตราเงินคิดลด" />
              <input
                className="input-newInvest-pj-small"
                type="text"
                name="pass"
                value={discountingRate}
                onChange={onDiscountingRateChanged}
                required
              />
            </div>
          </div>
          <button type="button" onClick={onCreateProjectClicked}>
            Create Project
          </button>
          {/* <div className="button-container">
              <input className="input-newInvest-pj" type="submit" />
            </div> */}
        </form>
      </div>
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
    </div>
  );
};
export default AddProjectForm;
