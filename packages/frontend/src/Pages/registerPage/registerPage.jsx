/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

function registerPage() {
  return (
    <div class="App container">
      <div class="row">
        <div class="col-sm">
          <img
            src={require("../../Assets/register-img.png")}
            class="card-img-2"
            style={{ transform: "scale(0.7) translate(0%, 0%)" }}
          />
        </div>
        <div class="col-sm" style={{ transform: " translate(0%, 20%)" }}>
          <p class="head-font">Register</p>
          <p className="low-font">Create your account</p>
          <div class="input-group input-group-sm mb-3 px-5">
            <input
              type="text"
              class="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Name"
            />
          </div>
          <div class="input-group input-group-sm mb-3 px-5">
            <input
              type="text"
              class="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Surname"
            />
          </div>
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
              placeholder="Email"
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
            <p>นิติบุคคล</p>
            <p>บุคคลธรรมดา</p>
          </div>

          <div className="d-flex justify-content-center">
            <p>Already have an account ?</p>
            <Link to="/Login">
              <p>Sign in</p>
            </Link>
            <button type="button" class="btn btn-primary">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default registerPage;
