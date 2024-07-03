import React from "react";

const PortfolioText = () => {
  const buttons = ["try demo", "view code", "watch presentation"];
  return (
    <div className="portfolio_text">
      <p>
        Recipix is a cross-platform mobile application that allows a user to
        virtually keep track of items in their fridge. Users may add items from
        their fridge via barcode scanning, and the app generates a list of
        recipes they can create based on those ingredients. Users may filter
        recipes based on specific ingredients. Recommended recipes show
        step-by-step instructions as well as any missing ingredients. This app
        was created in 2.5 weeks in an agile team of 4 for a capstone project.
      </p>
      <p>
        {" "}
        Technologies: JavaScript, React Native, Redux, Expo, Sequelize,
        PostgreSQL, Node.js, Express, Edamam API, Spoonacular API
      </p>
      <div className="btns_div">
        {buttons.map((button) => (
          <button className="btn btn_portfolio">
            {button}
            {/* <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-up-right-from-square"></i>
            <i class="fa-regular fa-circle-play"></i>
            <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioText;
