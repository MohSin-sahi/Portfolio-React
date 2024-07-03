import React, { useState } from "react";

const PortfolioSlider = () => {
  const [step, setStep] = useState(0);
  const sliderData = [
    {
      imgName: "Picture1",
      img: "img/recipixslide1.jpg",
      text: "Recipix is a mobile app that keep tracks of items in your fridge and recommends recipes based on those items.",
    },
    {
      imgName: "Picture2",
      img: "img/recipixslide2.png",
      text: "Add items to your virtual fridge by scanning the barcode or by manual input (left). Optionally set an expiration date (center). All fridge items are shown in the Fridge tab (right).",
    },
    {
      imgName: "Picture3",
      img: "img/recipixslide3.png",
      text: "Recipix recommends delicious recipes based on what's in your fridge(left). You can also filter recipes by ingredients (right).",
    },
    {
      imgName: "Picture4",
      img: "img/recipixslide4.png",
      text: "Your user profile (center). You can set your dietary preferences (left) and allergies (right).",
    },
    {
      imgName: "Picture5",
      img: "img/recipixteam.jfif",
      text: "Developers of Recipix (from left to right): Lily Moriarty, Luis Bello, Chris Chin (me), Don Ng",
    },
  ];

  const circleSlide = function (id) {
    setStep(id);
  };
  const leftSlide = function () {
    setStep((step) => (step === sliderData.length - 1 ? 0 : step + 1));
  };
  const rightSlide = function () {
    setStep((step) => (step === 0 ? sliderData.length - 1 : step - 1));
  };
  return (
    <>
      <div className="slider_box">
        {sliderData.map((slideData, i) => (
          <div className="slider">
            <img src={slideData.img} alt={slideData.imgName} />
            <span className="left_slide" onClick={() => leftSlide()}>
              &lt;
            </span>
            <span className="right_slide" onClick={() => rightSlide()}>
              &gt;
            </span>
            <p>{slideData.text}</p>
          </div>
        ))}
      </div>
      <div className="circle_div">
        {sliderData.map((dot, i) => (
          <span
            className={step === i ? "active_circle" : ""}
            onClick={() => circleSlide(i)}
          >
            &nbsp;
          </span>
        ))}
      </div>
    </>
  );
};

export default PortfolioSlider;
