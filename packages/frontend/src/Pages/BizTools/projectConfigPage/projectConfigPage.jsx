import axios from "axios";
import React, { useState, useEffect } from "react";
import BizSidebar from "../../../Components/bizTools/bizSidebar/bizSidebar";
import InfoProject from "../../../Components/bizTools/infoProject/infoProject";

import AUTH from "../../../Assets/Mock/mockAuth";
import BiztoolHeader from "../../../Components/investmentProject/biztoolHeader/biztoolHeader";

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
    <div>
        <BizSidebar />
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
  );
}

export default ProjectConfigPage;
