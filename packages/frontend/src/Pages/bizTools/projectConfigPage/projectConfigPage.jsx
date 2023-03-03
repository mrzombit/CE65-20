import axios from "axios";
import React, { useState, useEffect } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import InfoProject from "../../../components/bizTools/infoProject/infoProject";

import AUTH from "../../../assets/Mock/mockAuth";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";

function ProjectConfigPage() {
  const [auth, setAuth] = useState(AUTH);
  const [project, setProject] = useState([]);

  const [config, setConfig] = useState({
    type: "project-config",
    title: "เกี่ยวกับธุรกิจ",
  })

  useEffect(() => {
    axios
      .get(`http://localhost:5000/project/post/${auth._id}/`)
      .then((res) => {
        setProject(res.data);
        console.log(res.data.name);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="d-flex">
      <BizSidebar />
      <div className="">x
        <BiztoolHeader type={config.type} title={config.title} />
        <InfoProject />
        {/* 
        {project.map((element, index) => {
        return (
          <div key={index}>
           <InfoProject name={element.name}/>
          </div>
        );
      })} */}
      </div>
    </div>
  );
}

export default ProjectConfigPage;
