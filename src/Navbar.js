import React from "react";

const Navbar = () => {
  const menu = [
    "portfolio",
    "about",
    "resume",
    "contact",
    "github",
    "linkedin",
  ];
  return (
    <nav className="navbar">
      <a href="www.google.com" className="logo">
        c
      </a>

      <input type="checkbox" />
      <div class="hamburger">
        <span class="lines line1"></span>
        <span class="lines line2"></span>
        <span class="lines line3"></span>
      </div>
      <ul className="navbar_list">
        {menu.map((item, i) => (
          <li className="navbar_item" key={i}>
            <a href="www.google.com" className="navbar_link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
