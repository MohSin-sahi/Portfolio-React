import React from "react";
import Navbar from "./Navbar";
import HeadingCenter from "./HeadingCenter";

const Header = () => {
  return (
    <header className="header" id="head">
      <Navbar />
      <HeadingCenter />
    </header>
  );
};

export default Header;
