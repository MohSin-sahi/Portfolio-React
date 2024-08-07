import React from "react";

const HeadingCenter = () => {
  return (
    <div className="head_center">
      <div className="head_content">
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Hello! My name is
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Chris Chin.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          I'm a software engineer.
        </p>
        <a
          href="#portfolio"
          className="btn mt"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          view portfolio
        </a>
      </div>
    </div>
  );
};

export default HeadingCenter;
