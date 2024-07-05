import React from "react";
import "./App.css";
function Header() {
  const menu = ["ABOUT", "PROJECTS", "CONTACT"];
  return (
    <nav className="navbar">
      <div className="nav_logo">
        <img src="logo.png" alt="logo" className="logo1" />
        <img src="logo-text.png" alt="name" className="logo2" />
      </div>
      <ul className="d_flex nav_list">
        {menu.map((item) => (
          <li>
            <a href="www.youtube.com">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
