import React from "react";
import PortfolioSlider from "./PortfolioSlider";
import { portfolioData } from "./data";

const Portfolio = () => {
  return (
    <section>
      <div className="portfolio">
        <h1 className="heading1">Portfolio</h1>
        {portfolioData.map((portfolioData, i) => (
          <PortfolioSlider portfolioData={portfolioData} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
