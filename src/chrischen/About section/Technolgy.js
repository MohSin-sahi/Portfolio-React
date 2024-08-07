import React from "react";
import { tech } from "../Data files/data";

const Technolgy = () => {
  return (
    <div className="technology_section">
      <h3
        className="heading3"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Technologies I've Worked With
      </h3>
      <div
        className="technology_box"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
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
