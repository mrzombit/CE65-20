import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function DBTest1() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useState({ token: "", status: false ,username: ""})

  useEffect(() => {
    if (auth.status) {
      const config = {
        params: { username: auth.username },
        headers: { Authorization: `Bearer ${auth.token}` }
    };
      axios.get("http://localhost:5000/user/username",
        config,
      )
        .then(res => {
          console.log("response!");
          console.log(res)
          setUser(res.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, [auth]);

  const doSubmit = (input) => {
  // const doSubmit = (inp) => {
    // const input = { username: "erika4", password: "test123" }
    const params = new URLSearchParams();
    params.append('username', input.username);
    params.append('password', input.password);
    axios.post("http://localhost:5000/auth/auth/login"
      , params,)
      .then(res => {
        setAuth({ token: res.data.access_token, status: true ,username: input.username})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="justify-content-center align-self-center">
      <div>DB Test1</div>
      {users.map((each) =>
        <div>
          {each.name}
        </div>
      )}
      <div className="d-flex ">
        <div className="w-50">
        </div>
        <div>
          <div> Login</div>
          <form onSubmit={handleSubmit(doSubmit)}>
            <div class="form-group m-2">
              <label for="exampleInputUsername1">Username address</label>
              <input type="username" class="form-control"
                id="exampleInputUsername1" aria-describedby="usernameHelp"
                placeholder="Enter username"
                {...register('username', { required: true })}
              />
            </div>
            <div class="form-group m-2">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control"
                id="exampleInputPassword1" placeholder="Password"
                {...register('password', { required: true })}
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DBTest1