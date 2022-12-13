/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function loginPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <img
            src={require("../../Assets/login-img.png")}
            className="card-img-2"
            style={{ transform: "scale(0.7) translate(-10%, 0%)" }}
          />
        </div>
        <div className="col-sm-4 lp" style={{ transform: " translate(0%, 20%)" }}>
          <p className="head-font ">Welcome back </p>
          <p className="low-font">Sign in to your account</p>

          <div className="text-field my-4">
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="text-field my-3">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="d-flex justify-content-between">
            <Link className="link-text">
              <p>Forget Password ?</p>
            </Link>
            <Link  to="/Workspace" style={{ textDecoration: "none" }} >
              <button type="button" className="btn login-butt">
                Sign in
              </button>
            </Link>
          </div>
          <hr></hr>
          <div className=" d-flex justify-content-center">
            <button type="button" className="btn gg-butt my-2">
              <FcGoogle className="mx-3 gg-icon" /> Sign in with Google
            </button>
          </div>
          <div className="d-flex justify-content-center my-2">
            <p>Don't have an account ? &nbsp;</p>
            <Link to="/Register" style={{ textDecoration: "none"}}>
              <p>Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
