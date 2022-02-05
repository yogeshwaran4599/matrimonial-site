import React, { useState } from "react";
import "./SignupForm.css";
import CloseIcon from "@mui/icons-material/Close";

function SignupForm() {
  const [userSignup, setUserSignUp] = useState("false");
  function signupClick() {
    setUserSignUp(!userSignup);
  }
  return (
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
      <button type="submit" className="register-btn" onClick={signupClick}>
        register for free
      </button>
    </form>
  );
}

export default SignupForm;
