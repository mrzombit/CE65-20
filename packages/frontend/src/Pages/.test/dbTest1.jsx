import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function DBTest1() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useState(
    { token: "", 
    status: false, 
    user_id: "63de88dd7e267c38c5cdf616" })
  const [projects,setProjects] = useState([])

  useEffect(() => {

    axios.get(`http://localhost:5000/project/user/${auth.user_id}`
      )
        .then(res => {
          setProjects(res.data)
        })
        .catch(function (error) {
          console.log(error);
        })
  

  }, []);

  return (
    <div className="justify-content-center align-self-center">
      <div>DB Test1 !</div>
      {projects.map((each) =>
        <div>
          {each.name}
        </div>
      )}
    </div>
  )
}

export default DBTest1