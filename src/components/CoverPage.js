import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./CoverPage.css";
import CloseIcon from "@mui/icons-material/Close";
import Form from "./Form";

function CoverPage() {
  const [userLogin, setUserLogin] = useState("true");

  function loginClick() {
    setUserLogin(!userLogin);
  }
  return (
    <div className="coverpage">
      <div className="header">
        <div className="header-left">Tamil Matrimony</div>
        <div className="header-right">
          <span onClick={loginClick}>Login</span>
        </div>
      </div>
      <form className={userLogin ? "login-form active" : "login-form"}>
        <p>lets get started!</p>
        <CloseIcon className="fa-times" onClick={loginClick} />
        <input
          type="email"
          placeholder="enter your email or mobile no"
          className="box"
        />
        <input
          type="password"
          placeholder="enter your password"
          className="box"
        />
        <div className="flex">
          <input type="checkbox" name="" id="remember-me" />
          <label htmlFor="remember-me">remember me</label>
          <a to="#" className="link">
            forget password ?
          </a>
        </div>

        <input type="submit" value="login-now" className="login-btn" />

        <p>signup for free?</p>
      </form>
      <div className="content">
        <h1>we make your dream come true</h1>
        <h3>search by community,language,religion</h3>
      </div>

      <Form />
    </div>
  );
}

export default CoverPage;
