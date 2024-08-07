import React from "react";
import Technolgy from "./Technolgy";
import Hobby from "./Hobby";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading1"  data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">About me</h1>
      <div className="about_box"  data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
        <div className="img_box">
          <img src="img/chrischen/portfolionobg.png" alt="profile" />
        </div>
        <p className="about_para">
          Hi! I’m Chris Chin, a full-stack web developer and software engineer
          based in Brooklyn, NY. After working as an accountant for almost 7
          years, I’ve decided to take the leap to pursue a career in software
          engineering. I’ve enrolled in a full-time immersive software
          engineering program at Fullstack Academy in NYC. Having just graduated
          from this rigorous program, I can say that applying to a coding
          bootcamp has been the best decision I have ever made in my life. I
          love to learn new technologies and flex my creativity to create
          amazing things.
        </p>
      </div>
      <Technolgy />
      <Hobby />
    </section>
  );
};

export default About;
