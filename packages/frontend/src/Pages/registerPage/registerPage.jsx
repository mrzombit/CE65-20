/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registerPage.css";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import ConditionalLink from "../../Components/common/conditionalLink";

function RegisterPage() {
  const [user, setUser] = useState();
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useState({ token: "", status: false, username: "" })
  const navigate = useNavigate();

  const doSubmit = (input) => {
    const params = new URLSearchParams();
    params.append('username', input.username);
    params.append('password', input.password);
    params.append('email', input.email);
    params.append('name', input.name);
    params.append('surname', input.surname);
    params.append('is_cooperation', false);
    axios.post("http://localhost:5000/user/signup"
      , params,)
      .then(res => {
        const result = JSON.stringify(res)
        console.log(res)
        if (res.status == 200) {
          navigate('/Login');
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Error")
      })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <img
            src={require("../../Assets/register-img.png")}
            className="card-img-2"
            style={{ transform: "scale(0.7) translate(-12%, 8%)" }}
          />
        </div>
        <div className="col-sm-4 lp-re" style={{ transform: " translate(0%, 10%)" }}>
          <p className="head-font-re">Register</p>
          <p className="low-font-re">Create your account</p>
          <form onSubmit={handleSubmit(doSubmit)}>
            <div class="form-group text-field-re my-4">
              <input
                type="text"
                class="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                {...register('name', { required: true })}
                required />
              <label>Name</label>
            </div>
            <div class="form-group text-field-re my-4">
              <input
                type="text"
                class="form-control"
                id="exampleInputSurname1"
                aria-describedby="surnameHelp"
                {...register('surname', { required: true })}
                required />
              <label>Surname</label>
            </div>
            <div class="form-group text-field-re my-4">
              <input
                type="text"
                class="form-control"
                id="exampleInputUsername1"
                aria-describedby="usernameHelp"
                {...register('username', { required: true })}
                required />
              <label>Username</label>
            </div>
            <div class="form-group text-field-re my-4">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register('email', { required: true })}
                required />
              <label>Email</label>
            </div>
            <div class="form-group text-field-re my-4">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                aria-describedby="passwordHelp"
                {...register('password', { required: true })}
                required />
              <label>Password</label>
            </div>
            <div class="form-group text-field-re my-4">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                aria-describedby="passwordHelp"
                {...register('comfirmPassword', { required: true })}
                required />
              <label>Confirm Password</label>
            </div>
            <div className="form-group d-flex check-text mt-4">
              <p><AiOutlineCheckCircle className="mx-1" />นิติบุคคล</p>
              <p className="mx-4"><AiOutlineCheckCircle className="mx-1" />บุคคล</p>
            </div>
            <div className="form-group d-flex justify-content-between">
              <div className="d-flex m-2 re-text align-baseline">
                <p style={{ opacity: "0.5" }}>Already have an account ? &nbsp;</p>
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <p>Sign in</p>
                </Link>
              </div>
              <ConditionalLink condition={user} to="/Workspace" style={{ textDecoration: "none" }} >
                <button type="submit" class="btn login-butt">
                  Sign up
                </button>
              </ConditionalLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
