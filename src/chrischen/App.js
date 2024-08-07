import React, { useEffect } from "react";
import Header from "./Header section/Header";
import Portfolio from "./Portfolio section/Portfolio";
import About from "./About section/About";
import Resume from "./Resume section/Resume";
import Contact from "./Contact section/Contact";
import Footer from "./Footer section/Footer";
import "./CSS style/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  //   componentDidMount() {
  //     AOS.init();
  // }
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
