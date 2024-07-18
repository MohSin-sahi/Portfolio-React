import React from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />;
      <div className="container">
        <Portfolio />;
        <About />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
