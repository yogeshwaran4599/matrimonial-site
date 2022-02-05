import React, { useState } from "react";
import "./Form.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Form() {
  const [userSignup, setUserSignUp] = useState("false");
  function signupClick(e) {
    e.preventDefault();
    setUserSignUp(!userSignup);
  }

  return (
    <div className="form-component">
      <form className="form">
        <div className="gender">
          <label>looking for a</label>
          <select name="gender">
            <option>female</option>
            <option>male</option>
          </select>
        </div>
        <div className="age">
          <label>aged</label>
          <input
            type="number"
            name="age"
            min="18"
            max="71"
            step="1"
            placeholder="18"
          />
        </div>
        <div className="age2">
          <label>to</label>
          <input
            type="number"
            name="age"
            min="18"
            max="71"
            step="1"
            placeholder="21"
          />
        </div>
        <div className="religion">
          <label>religion</label>
          <select name="religion">
            <option>hindu</option>
            <option>muslim</option>
            <option>christian</option>
          </select>
        </div>
        <div className="language">
          <label>mother tounge</label>
          <select name="language">
            <option>Tamil</option>
            <option>hindi</option>
            <option>malayalam</option>
          </select>
        </div>
        <button onClick={signupClick}>let's begin</button>
      </form>

      {/* //signup form starts here */}

      <form className={userSignup ? "signup-form active" : "signup-form"}>
        <h2>tamil motrimony</h2>
        <p>signup your free account</p>
        <CloseIcon className="fa-times" onClick={signupClick} />
        <div className="input-feild">
          <input
            type="text"
            className="firstname"
            placeholder="enter your first name"
          />
          <input
            type="text"
            className="lastname"
            placeholder="enter your last name"
          />
          <input
            type="password"
            className="userpassword"
            placeholder="password"
          />
          <input
            type="password"
            className="conformpassword"
            placeholder="conform password"
          />
          <input
            type="email"
            className="useremail"
            placeholder="enter your email"
          />
        </div>
        <div className="user-info">
          <select name="person">
            <option>self</option>
            <option>son</option>
            <option>daughter</option>
          </select>
          <input type="date" className="dob" />
          <select name="user-religion">
            <option>hindu</option>
            <option>muslim</option>
            <option>christian</option>
          </select>
          <select name="user-caste">
            <option>nadar</option>
            <option>iyer</option>
            <option>devar</option>
          </select>
          <select name="user-state">
            <option>tamilnadu</option>
            <option>kerala</option>
            <option>karnataka</option>
          </select>
          <input
            type="number"
            className="user-mobile"
            placeholder="+91 mobile number"
          />
        </div>
        <Link to="/matches">
          <button type="submit" className="register-btn" onClick={signupClick}>
            register for free
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
