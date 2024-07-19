import React from "react";

const Resume = () => {
  return (
    <section className="resume_section" id="resume">
      <h1 className="heading1">Resume</h1>
      <div className="resume_btns">
        <button className="btn resume_btn">
          <span>view resume</span>
          <img src="img/footer/viewfile.png" alt="download" />
        </button>
        <button className="btn resume_btn">
          <span>download resume</span>
          <img src="img/footer/download.png" alt="download" />
        </button>
      </div>
    </section>
  );
};

export default Resume;
