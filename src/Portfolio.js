import React from "react";
import PortfolioSlider from "./PortfolioSlider";
import { portfolioData } from "./data";

const Portfolio = () => {
  return (
    <section className="portfolio_section">
      <h1 className="heading1">Portfolio</h1>
      {portfolioData.map((portfolioData, i) => (
        <PortfolioSlider portfolioData={portfolioData} key={i} />
      ))}
    </section>
  );
};

export default Portfolio;
