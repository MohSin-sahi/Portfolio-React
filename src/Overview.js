import React from "react";

const userTech = [
  {
    photoName: "frontend.png",
    nameOne: "Frontend",
    nameTwo: "Developer",
  },
  {
    photoName: "backend.png",
    nameOne: "Backend",
    nameTwo: "Developer",
  },
  {
    photoName: "UI.png",
    nameOne: "UI/UX Design",
  },
  {
    photoName: "prototype.png",
    nameOne: "Software",
    nameTwo: "Prototyping",
  },
];

function Overview() {
  return (
    <div className="about">
      <div className="about_s">
        <p className="intro">INTRODUCTION</p>
        <h1 className="intro1">Overview.</h1>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae
          ea quaerat alias accusamus voluptas autem! Alias odit voluptates in
          totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam
          obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
          veniam dolorum ipsum doloribus.
        </p>
        <div className="about_box">
          {userTech.map((tech) => (
            <Box techObj={tech} key={tech.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Box(props) {
  return (
    <div className="about_box1">
      <img src={props.techObj.photoName} alt={props.techObj.nameOne} />
      <p>
        {props.techObj.nameOne} <br /> {props.techObj.nameTwo}
      </p>
    </div>
  );
}

export default Overview;
