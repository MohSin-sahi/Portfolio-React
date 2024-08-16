import React from "react";

const workData = [
  {
    nameOneRight: "Front-End Developer",
    nameTwoRight: "Cover Hunt",
    imageNameRight: "exp1.png",
    dateRight: "Aug 2021 - Feb 2022",
    nameOneLeft: "Mentor (Volunteer)",
    nameTwoLeft: "Microverse",
    imageNameLeft: "exp2.png",
    dateLeft: "Mar 2022 - May 2022",
    imageAlt: "Company Logo",
  },
  {
    nameOneRight: "Junior Software Engineer",
    nameTwoRight: "Kelhel",
    imageNameRight: "exp3.png",
    dateRight: "May 2022 - Oct 2022",
    nameOneLeft: "Full Stack Developer",
    nameTwoLeft: "Diversity Cyber Council",
    imageNameLeft: "exp4.png",
    dateLeft: "Sep 2022 - Present",
    imageAlt: "Company Logo",
  },
];

function Work() {
  return (
    <div className="work_box">
      <div className="exp_box">
        <div className="exp_side"></div>
        <p className="exp_h">WHAT I'VE DONE SO FAR</p>
        <h1 className="exp_h1">Work Experience.</h1>
        {workData.map((workBoth, i) => (
          <CompanyWork workObj={workBoth} key={i} />
        ))}
        <div className="exp_detail">
          <div className="exp_info_l">
            <div className="exp1 df_center">
              <a href="www.youtube.com" className="live_btn">
                MY RESUME
                <img
                  src="resume_download.png"
                  alt="Demo Logo"
                  className="demo_img"
                />
              </a>
              <div className="arrow_exp_l"></div>
            </div>
            <div className="c_logo">
              <img src="resume.png" alt="Resume" className="c_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyWork(props) {
  return (
    <div>
      <div className="exp_detail">
        <div className="exp_info_l">
          <div className="exp1">
            <h2>{props.workObj.nameOneRight}</h2>
            <p>{props.workObj.nameTwoRight}</p>
            <div className="arrow_exp_l"></div>
          </div>
          <div className="c_logo">
            <img
              src={props.workObj.imageNameRight}
              alt={props.workObj.imageAlt}
              className="c_img"
            />
          </div>
        </div>
        <div className="exp_date_r">
          <p className="exp_date">{props.workObj.dateRight}</p>
        </div>
      </div>
      <div className="exp_detail">
        <div className="exp_date_l">
          <p className="exp_date">{props.workObj.dateLeft}</p>
        </div>
        <div className="exp_info_r">
          <div className="exp1 exp_w">
            <h2>{props.workObj.nameOneLeft}</h2>
            <p>{props.workObj.nameTwoLeft}</p>
            <div className="arrow_exp_r"></div>
          </div>
          <div className="c_logo1">
            <img
              src={props.workObj.imageNameLeft}
              alt={props.workObj.imageAlt}
              className="c_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
