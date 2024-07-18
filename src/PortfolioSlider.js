import React, { useState } from "react";

const PortfolioSlider = ({ portfolioData }) => {
  const [step, setStep] = useState(0);

  const circleSlide = function (id) {
    setStep(id);
  };
  const leftSlide = function () {
    setStep((step) => (step === 0 ? portfolioData.slide.length - 1 : step - 1));
  };
  const rightSlide = function () {
    setStep((step) => (step === portfolioData.slide.length - 1 ? 0 : step + 1));
  };
  return (
    <div className="portfolio">
      <h2 className="heading2">{portfolioData.title}</h2>

      <div className="slider_box">
        {/* {portfolioData.slide.map((slideData, i) => ( */}
        <div className="slider">
          <img
            src={portfolioData.slide[step].img}
            alt={portfolioData.slide[step].imgName}
          />
          <span className="left_slide" onClick={() => leftSlide()}>
            &lt;
          </span>
          <span className="right_slide" onClick={() => rightSlide()}>
            &gt;
          </span>
          <p>{portfolioData.slide[step].text}</p>
        </div>
        {/* ))} */}
      </div>
      <div className="circle_div">
        {portfolioData.slide.map((dot, i) => (
          <span
            key={i}
            className={step === i ? "active_circle" : ""}
            onClick={() => circleSlide(i)}
          >
            &nbsp;
          </span>
        ))}
      </div>
      <div className="portfolio_text">
        <p>{portfolioData.para1}</p>
        <p> {portfolioData.para2}</p>
        <div className="btns_div">
          {portfolioData.buttons.map((button, i) => (
            <button className="btn btn_portfolio" key={i}>
              <span>{button.btnText}</span>
              <img src={button.btnImg} alt={button.btnText} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
