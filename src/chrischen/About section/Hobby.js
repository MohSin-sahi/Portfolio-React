import React from "react";

const hobbyImage = [
  { imgName: "logo1", imgPath: "img/chrischen/hobby/game.png" },
  { imgName: "logo2", imgPath: "img/chrischen/hobby/travel.png" },
  { imgName: "logo3", imgPath: "img/chrischen/hobby/swim.png" },
  { imgName: "logo4", imgPath: "img/chrischen/hobby/jog.png" },
  { imgName: "logo5", imgPath: "img/chrischen/hobby/tv.png" },
  { imgName: "logo6", imgPath: "img/chrischen/hobby/hp.png" },
  { imgName: "logo7", imgPath: "img/chrischen/hobby/noodles.png" },
  { imgName: "logo8", imgPath: "img/chrischen/hobby/sushi.png" },
];

const Hobby = () => {
  return (
    <div className="hobby_section">
      <h3
        className="heading3"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Hobbies & Interests
      </h3>
      <div
        className="hobby_box"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="hobby_img-container">
          {hobbyImage.map((img, i) => (
            <div className="hobby_img-box" key={i}>
              <img
                src={img.imgPath}
                alt={img.imgName}
                data-aos="flip-left"
                data-aos-delay={`${i * 100}`}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              />
            </div>
          ))}
        </div>
        <p className="hobby_para">
          Besides my passion for coding, I love to play video games,
          specifically RPGs and MMORPGs. I also love to travel, swim, and jog.
          I'm a Netflix and Hulu binger. I am a huge fan of Harry Potter. On
          Wednesdays, you can find me yelling at my TV when my favorite Survivor
          castaway gets voted off the island. My favorite foods are phở and
          sushi.
        </p>
      </div>
    </div>
  );
};

export default Hobby;
