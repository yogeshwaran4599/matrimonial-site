import React from "react";
import { Link } from "react-router-dom";
import "./Matches.css";

function Matches() {
  return (
    <>
      <Link to="/matches">
        <nav className="matches-links">
          <ul>
            <li>
              <Link to="/mymatches">my matches</Link>
              <Link to="/newmatches"> new matches</Link>
              <Link to="/suggestion">suggested near by</Link>
              <Link to="/intrestshown">intrest shown</Link>
            </li>
          </ul>
        </nav>
      </Link>
    </>
  );
}

export default Matches;
