import React from "react";

function Work() {
  return (
    <div className="work_box">
      <div className="exp_box">
        <div className="exp_side"></div>
        <p className="exp_h">WHAT I'VE DONE SO FAR</p>
        <h1 className="exp_h1">Work Experience.</h1>
        <div className="exp_detail">
          <div className="exp_info_l">
            <div className="exp1">
              <h2>Front-End Developer</h2>
              <p>Cover Hunt</p>
              <div className="arrow_exp_l"></div>
            </div>
            <div className="c_logo">
              <img src="exp1.png" alt="Company Logo" className="c_img" />
            </div>
          </div>
          <div className="exp_date_r">
            <p className="exp_date">Aug 2021 - Feb 2022</p>
          </div>
        </div>
        <div className="exp_detail">
          <div className="exp_date_l">
            <p className="exp_date">Mar 2022 - May 2022</p>
          </div>
          <div className="exp_info_r">
            <div className="exp1 exp_w">
              <h2>Front-End Developer</h2>
              <p>Cover Hunt</p>
              <div className="arrow_exp_r"></div>
            </div>
            <div className="c_logo1">
              <img src="exp2.png" alt="Company Logo" className="c_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
