import React from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Portfolio />
        <About />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
