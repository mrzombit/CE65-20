/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./registerPage.css";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";

function registerPage() {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <img
            src={require("../../Assets/register-img.png")}
            class="card-img-2"
            style={{ transform: "scale(0.7) translate(-12%, 8%)" }}
          />
        </div>
        <div class="col-sm-4 lp-re" style={{ transform: " translate(0%, 10%)" }}>
          <p class="head-font-re">Register</p>
          <p className="low-font-re">Create your account</p>
          <div class="text-field-re my-4">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div class="text-field-re my-4">
            <input type="text" required />
            <label>Surname</label>
          </div>
          <div class="text-field-re my-4">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div class="text-field-re my-4">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div class="text-field-re my-3">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div class="text-field-re my-3">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="d-flex check-text mt-4">
            <p><AiOutlineCheckCircle className="mx-1"/>นิติบุคคล</p>
            <p className="mx-4"><AiOutlineCheckCircle className="mx-1"/>บุคคล</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex m-2 re-text align-baseline">
              <p style={{ opacity: "0.5" }}>Already have an account ? &nbsp;</p>
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <p>Sign in</p>
              </Link>
            </div>
            <Link to="/Workspace" style={{ textDecoration: "none" }}>
              <button type="button" class="btn re-butt">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default registerPage;
