import React from "react";
import { Link } from "react-router-dom";
import "./ProfileBar.css";

export const ProfileBar = () => {
  return (
    <Link to="/profile">
      <nav className="profile-links">
        <ul>
          <li>
            <Link to="/myprofile">my profile</Link>
            <Link to="/myphoto">my photos</Link>
            <Link to="/mypreference">my preference</Link>
            <Link to="/setting">settings</Link>
            <Link to="/more">more</Link>
          </li>
        </ul>
      </nav>
    </Link>
  );
};
