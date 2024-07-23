import React from "react";
import { tech } from "./data";

const Technolgy = () => {
  return (
    <div className="technology_section">
      <h3 className="heading3">Technologies I've Worked With</h3>
      <div className="technology_box">
        {tech.map((data, i) => (
          <div className="technology" key={i}>
            <p className="technology_title">{data.heading}</p>
            <div className="technologies">
              {data.TechData.map((techPic, i) => (
                <div className=" techimg_box" key={i}>
                  <img src={techPic.imgpath} alt={techPic.title} />
                  <span className="toolTip">{techPic.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technolgy;
