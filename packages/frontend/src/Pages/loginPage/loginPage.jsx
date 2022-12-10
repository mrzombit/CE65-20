/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";

function loginPage() {
  return (
    <div class="App container">
      <div class="row">
        <div class="col-sm">
          <img
            src={require("../../Assets/login-img.png")}
            class="card-img-2"
            style={{ transform: "scale(0.7) translate(0%, 0%)" }}
          />
        </div>
        <div class="col-sm" style={{ transform: " translate(0%, 20%)" }}>
          <p class="head-font">Welcome back</p>
          <p className="low-font">Sign in to your account</p>
          <div class="input-group input-group-sm mb-3 px-5">
            <input
              type="text"
              class="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Username"
            />
          </div>
          <div class="input-group input-group-sm mb-3 px-5">
            <input
              type="text"
              class="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Password"
            />
          </div>
          <div className="d-flex justify-content-center">
            <Link>
              <p>Forget Password ?</p>
            </Link>
            <button type="button" class="btn btn-primary">
              Sign in
            </button>
          </div>
          <hr></hr>
          <button type="button" class="btn btn-light">
            Sign in with Google
          </button>
          <div className="d-flex justify-content-center">
            <p>Don't have an account ?</p>
            <Link to="/Register">
              <p>Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
