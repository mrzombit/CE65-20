import axios from "axios";
import React, { useState, useEffect } from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";
import InfoProject from "../../../Components/infoProject/infoProject";

import AUTH from "../../../Assets/Mock/mockAuth";

function ProjectConfigPage() {
  const [auth, setAuth] = useState(AUTH);
  const [project, setProject] = useState([]);

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
      <div className="pj-config">
        <BizHeader title="Project Configuration" infoPath="/" btnName="Save" />

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
