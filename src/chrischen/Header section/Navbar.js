import React from "react";

const Navbar = () => {
  const menu = [
    { text: "portfolio", link: "#portfolio" },
    { text: "about", link: "#about" },
    { text: "resume", link: "#resume" },
    { text: "contact", link: "#contact" },
    { text: "github", link: "https://github.com/" },
    { text: "linkedin", link: "https://pk.linkedin.com/" },
  ];
  return (
    <nav className="navbar">
      <a href="#head" className="logo">
        c
      </a>

      <input type="checkbox" />
      <div className="hamburger">
        <span className="lines line1"></span>
        <span className="lines line2"></span>
        <span className="lines line3"></span>
      </div>
      <ul className="navbar_list">
        {menu.map((item, i) => (
          <li className="navbar_item" key={i}>
            <a href={item.link} className="navbar_link">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
