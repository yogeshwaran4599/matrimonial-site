import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./NavBar.css";

function NavBar() {
  const [icon, setIcon] = useState("false");

  function changeIcon() {
    setIcon(!icon);
  }

  function closeSideBar() {
    setIcon("false");
  }
  return (
    <>
      <div onClick={changeIcon} className="menu-icon">
        {icon ? <MenuIcon /> : <CloseIcon />}
        <h1>tamil matrimony</h1>
        <span>upgrade to premium plan</span>
      </div>

      <div className={icon ? "navbar-wrapper active" : "navbar-wrapper"}>
        <div className="profile">
          <Link to="/matches" className="profile-logo" onClick={closeSideBar}>
            tamil marrimony
          </Link>
          <CloseIcon onClick={changeIcon} />
          <img src={require("../images/picture.jpg")} className="user-img" />
          <h3>kalai</h3>
        </div>

        <nav className="navbar-list">
          <ul className="nav-menu">
            <li>
              <Link to="/profile" className="nav-links" onClick={closeSideBar}>
                my profile
              </Link>
            </li>

            <li>
              <Link to="/matches" className="nav-links" onClick={closeSideBar}>
                matches
              </Link>
            </li>

            <li>
              <Link to="/inbox" className="nav-links" onClick={closeSideBar}>
                inbox
              </Link>
            </li>

            <li>
              <Link to="/search" className="nav-links" onClick={closeSideBar}>
                search
              </Link>
            </li>

            <li>
              <Link to="/" className="nav-links" onClick={closeSideBar}>
                logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
