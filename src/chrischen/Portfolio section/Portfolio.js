import React from "react";
import PortfolioSlider from "./PortfolioSlider";
import { portfolioData } from "../Data files/data";

const Portfolio = () => {
  return (
    <section className="portfolio_section" id="portfolio">
      <h1 className="heading1"  data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">Portfolio</h1>
      {portfolioData.map((portfolioData, i) => (
        <PortfolioSlider portfolioData={portfolioData} key={i} />
      ))}
    </section>
  );
};

export default Portfolio;
