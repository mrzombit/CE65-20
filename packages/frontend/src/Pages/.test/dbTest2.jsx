import React from 'react'

function DBTest2() {

  const [user, setUser] = useState({});
  
  useEffect(() => {
    axios.get("http://localhost:5000/user/").then((response) => {
      setUsers(response.data);
      console.log(response.data)
    });
  },[]);


  const saveData = (user = null) => {
    alert("save data");
  }
  const deleteData = (user = null) => {
    alert("delete data");
  }

  return (
    <div>
      <div>DBTest2</div>
      <div className='card-body'>
        <div className='text-lg-center'>
          User data:
        </div>
        <div className='m-2 border'>
          data
        </div>
        <div className='flex'>
          <div className='m-1 btn btn-primary' 
              onClick={() => saveData()}> save </div>
          <div className='m-1 btn btn-danger'
              onClick={() => deleteData()}> delete </div>
        </div>
      </div>
    </div>
  )
}

export default DBTest2