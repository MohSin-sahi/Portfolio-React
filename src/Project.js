import React from "react";

// const userProjects = [
//   {
//     photoName: "pro1.png",
//     logo: "pro_logo.png",
//     heading: "KOMIKULT",
//     para: "A comic characters list app that displays Marvel characters.",
//     btn_logo: "demo_logo.png",
//     btn: "Live Demo",
//   },
//   {
//     photoName: "pro2.png",
//     logo: "pro_logo.png",
//     heading: "LEADERBOARD",
//     para: "A leaderboard list app that displays scores submitted by different players.",
//     btn_logo: "demo_logo.png",
//     btn: "Live Demo",
//   },
//   {
//     photoName: "pro3.png",
//     logo: "pro_logo.png",
//     heading: "Math Magicians",
//     para: "This is a single-page calculator app built with React",
//     btn_logo: "demo_logo.png",
//     btn: "Live Demo",
//   },
//   {
//     photoName: "pro4.png",
//     logo: "pro_logo.png",
//     heading: "Movie Metro",
//     para: "A single-page application that allows users to search for any movie or show's ratings and its details.",
//     btn_logo: "demo_logo.png",
//     btn: "Live Demo",
//   },
//   {
//     photoName: "pro5.png",
//     logo: "pro_logo.png",
//     heading: "Nyeusi Fest Site",
//     para: "This is a demo concert website for a music festival called Nyeusi.",
//     btn_logo: "demo_logo.png",
//     btn: "Live Demo",
//   },
// ];

function Project() {
  return (
    <div className="pro">
      <div className="pro_s">
        <p className="intro">CASE STUDIES</p>
        <h1 className="intro_2">Projects.</h1>
        <p className="desc">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </p>
        <div className="pro_m">
          <div className="pro_card">
            <img src="pro1.png" alt="Project One" className="pro_img" />
            <div className="whEffect"></div>
            <p className="pro_name">Komikult</p>
          </div>
          <div className="pro_card w_30">
            <img src="pro2.png" alt="Project Two" className="pro_img" />
            <div className="whEffect"></div>
            <div className="pro_detail">
              <a href="#">
                <img src="pro_logo.png" alt="Logo" className="log" />
              </a>
              <h1 className="box_heading">leaderboard</h1>
              <p className="box_des">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
              </p>
              <a href="#" className="live_btn">
                <img src="demo_logo.png" alt="Demo Logo" className="demo_img" />
                LIVE DEMO
              </a>
            </div>
          </div>
          <div className="pro_card">
            <img src="pro3.png" alt="Project Three" className="pro_img" />
            <div className="whEffect"></div>
            <p className="pro_name">Math Magicians</p>
          </div>
          <div className="pro_card">
            <img src="pro4.png" alt="Project Four" className="pro_img" />
            <div className="whEffect"></div>
            <p className="pro_name">Movie Metro</p>
          </div>
          <div className="pro_card">
            <img src="pro5.png" alt="Project Five" className="pro_img" />
            <div className="whEffect"></div>
            <p className="pro_name">Nyeusi Fest Site</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Box(props) {
//   return (
//     <div className="about_box1">
//       <img src={props.techObj.photoName} alt={props.techObj.nameOne} />
//       <p>
//         {props.techObj.nameOne} <br /> {props.techObj.nameTwo}
//       </p>
//     </div>
//   );
// }

export default Project;
