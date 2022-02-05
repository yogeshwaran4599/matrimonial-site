import React from "react";
import { Link } from "react-router-dom";
import "./Inbox.css";

function Inbox() {
  return (
    <Link to="/inbox">
      <nav className="inbox-links">
        <ul>
          <li>
            <Link to="/allrequest">all request</Link>
            <Link to="/premium">premium request</Link>
            <Link to="/accepted">accepted</Link>
            <Link to="sent">sent</Link>
            <Link to="/delete">delete</Link>
          </li>
        </ul>
      </nav>
    </Link>
  );
}

export default Inbox;
