import axios from "axios";
import { useEffect, useState } from "react";

function DBTest1() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/user/users").then((response) => {
      setUsers(response.data);
      console.log(response.data)
    });
  },[]);

  return (
    <div>
      <div>DB Test1</div>
      {users.map((each) => 
      <div>
        {each.name}
      </div>
      )}
    </div>
  )
}

export default DBTest1