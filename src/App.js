import React from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";

const App = () => {
  return (
    <div className="container">
      <Header />;
      <Portfolio />;
      <About />
    </div>
  );
};

export default App;
