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

      <ul className="navbar_list">
        {menu.map((item) => (
          <li className="navbar_item">
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
