import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="copyright">
      <p>Copyright © {year} Manoramaonline. All rights reserved</p>
    </footer>
  );
}

export default Footer;
