import React from "react";

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
          <div className="about_box1">
            <img src="frontend.png" alt="Frontend" />
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
