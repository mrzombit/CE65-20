import React, { useState, useEffect, useRef } from "react";
import "./workSpacePage.css";
import Bizbutton from "../../components/bizTools/bizButton/bizButton";
import {
  VscAdd,
  VscListUnordered,
  VscDiff,
  VscExtensions,
  VscListSelection,
} from "react-icons/vsc";
import { CiGrid41 } from "react-icons/ci";
import ProjectCard from "../../components/projects/projectCard/projectCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByUsername } from "../../features/usersSlice";
import { fetchProjectsByUserId, setSelectedProject } from "../../features/projectsSlice";
import BiztoolPopup from "../../components/common/biztoolPopup";
import AddProjectForm from "../../components/projects/AddProjectForm";

function WorkSpacePage() {
  const [newProjectPopupState, setNewProjectPopupState] = useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector(state => state.users.auth)
  const user = useSelector(state => state.users.user)
  const projects = useSelector(state => state.projects.projects)
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false })
  const isAlert = useRef(false)

  useEffect(() => {
    if (auth.username) {
      if (auth.token != "") {
        if (!isLoaded.user) {
          dispatch(fetchUserByUsername({ username: auth.username, token: auth.token }))
          setIsLoaded({ user: true, projects: false })
        }
      }
      if (isLoaded.user) {
        if (!isLoaded.projects) {
          dispatch(fetchProjectsByUserId(user._id))
          setIsLoaded({ user: true, projects: true })
        }
      }
    }
    else navigate('/login')
  }, [auth.token, user, newProjectPopupState]);

  const handleProjectOnClick = (each) => {
    // console.log(JSON.stringify(each));
    dispatch(setSelectedProject(each))
    navigate('/ProjectConfig')
  }

  return (
    <div>
      <BiztoolPopup
        leftTitle="สร้างโปรเจกธุรกิจใหม่"
        content={<AddProjectForm />}
        trigger={newProjectPopupState}
        close={() => setNewProjectPopupState(false)}
      />
      <div className="ws">
        <p className="head-text-ws mt-4">ธุรกิจของฉัน</p>
        <hr className="line"></hr>
        <div className="d-flex mt-4">
          <div className="d-flex">
            <Bizbutton
              onClick={() => setNewProjectPopupState(true)}
              name="สร้างโปรเจกธุรกิจใหม่"
              details="ประเมินความเป็นไปได้ของธุรกิจของคุณ"
              icon={<VscExtensions />}
              add={<VscAdd />}
            />
            <Bizbutton
              name="เปรียบเทียบระหว่างธุรกิจ 0/4"
              details="เปรียบเทียบความน่าลงทุนระหว่างธุรกิจ"
              icon={<VscDiff />}
            />
          </div>
          <div className="ss-group">
            <p className="ss-font-text m-2">ล่าสุด</p>
            <VscListUnordered className="ss-font-icon m-2" />
            <CiGrid41 className="ss-font-icon m-2" />
            <input
              className="form-control mr-sm-2 ss-font-search m-2 ss-font-text"
              type="search"
              placeholder="ค้นหา"
              aria-label="Search"
            />
            <VscListSelection className="ss-font-icon m-2" />
          </div>
        </div>
        <div className="d-flex my-3">
          {projects.map((each) => (
            <button style={{background: "none", border: "none"}}key={each._id} onClick={() => handleProjectOnClick(each)}>
              <ProjectCard name={each.name.slice(0, 12) + (each.name.length > 12 ? "..." : "")} lastEdit="Edited 2 hours ago" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkSpacePage;
