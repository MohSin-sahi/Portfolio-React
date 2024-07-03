import React from "react";
import PortfolioText from "./PortfolioText";
import PortfolioSlider from "./PortfolioSlider";

const Portfolio = () => {
  return (
    <section>
      <div className="portfolio">
        <h1 className="heading1">Portfolio</h1>
        <h2 className="heading2">Recipix</h2>
        <PortfolioSlider />
        <PortfolioText />
      </div>
    </section>
  );
};

export default Portfolio;
