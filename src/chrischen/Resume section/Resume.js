import React from "react";

const Resume = () => {
  return (
    <section className="resume_section section" id="resume">
      <h1
        className="heading1"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Resume
      </h1>
      <div
        className="resume_btns"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <button className="btn resume_btn">
          <span>view resume</span>
          <img src="img/chrischen/footer/viewfile.png" alt="download" />
        </button>
        <button className="btn resume_btn">
          <span>download resume</span>
          <img src="img/chrischen/footer/download.png" alt="download" />
        </button>
      </div>
    </section>
  );
};

export default Resume;
