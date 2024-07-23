export const portfolioData = [
  {
    title: "Recipix",
    slide: [
      {
        imgName: "Picture1",
        img: "img/chrischen/recipix/recipixslide1.jpg",
        text: "Recipix is a mobile app that keep tracks of items in your fridge and recommends recipes based on those items.",
      },
      {
        imgName: "Picture2",
        img: "img/chrischen/recipix/recipixslide2.png",
        text: "Add items to your virtual fridge by scanning the barcode or by manual input (left). Optionally set an expiration date (center). All fridge items are shown in the Fridge tab (right).",
      },
      {
        imgName: "Picture3",
        img: "img/chrischen/recipix/recipixslide3.png",
        text: "Recipix recommends delicious recipes based on what's in your fridge(left). You can also filter recipes by ingredients (right).",
      },
      {
        imgName: "Picture4",
        img: "img/chrischen/recipix/recipixslide4.png",
        text: "Your user profile (center). You can set your dietary preferences (left) and allergies (right).",
      },
      {
        imgName: "Picture5",
        img: "img/chrischen/recipix/recipixteam.jfif",
        text: "Developers of Recipix (from left to right): Lily Moriarty, Luis Bello, Chris Chin (me), Don Ng",
      },
    ],
    para1:
      "Recipix is a cross-platform mobile application that allows a user to virtually keep track of items in their fridge. Users may add items from their fridge via barcode scanning, and the app generates a list of recipes they can create based on those ingredients. Users may filter recipes based on specific ingredients. Recommended recipes show step-by-step instructions as well as any missing ingredients. This app was created in 2.5 weeks in an agile team of 4 for a capstone project.",
    para2:
      "Technologies: JavaScript, React Native, Redux, Expo, Sequelize, PostgreSQL, Node.js, Express, Edamam API, Spoonacular API",
    buttons: [
      { btnText: "try demo", btnImg: "img/chrischen/footer/externallink2.png" },
      { btnText: "view code", btnImg: "img/chrischen/footer/github3.png" },
      {
        btnText: "watch presentation",
        btnImg: "img/chrischen/footer/video.png",
      },
    ],
  },
  {
    title: "Race Hopper",
    slide: [
      {
        imgName: "Picture1",
        img: "img/chrischen/race/racelevel1.png",
        text: "Race Hopper is a 3D platform video game. Shown here is Level 1, which is easy peasy! Grab the jewels to get a better time!",
      },
      {
        imgName: "Picture2",
        img: "img/chrischen/race/racelevel2.png",
        text: "Level 2. A little bit more difficult. Mind the gaps!",
      },
      {
        imgName: "Picture3",
        img: "img/chrischen/race/racelevel3.png",
        text: "Level 3. Very difficult!! Tears were shed trying to beat this level.",
      },
      {
        imgName: "Picture4",
        img: "img/chrischen/race/ianracehopper1.jpg",
        text: "Here's Ian, my nephew, enjoying a game of Race Hopper!",
      },
    ],
    para1:
      "Race Hopper is a 3D platform video game built with the WebGL API designed to be played in the web browser. Players must hop over obstacles to advance to the next level. Jewels may be collected to obtain a better score. This game was created solo in 2 days for a hack-a-thon.",
    para2: "Technologies: C#, Unity, WebGL",
    buttons: [
      { btnText: "try demo", btnImg: "img/chrischen/footer/externallink2.png" },
      { btnText: "view code", btnImg: "img/chrischen/footer/github3.png" },
    ],
  },
  {
    title: "Bot-Buddies",
    slide: [
      {
        imgName: "Picture1",
        img: "img/chrischen/bot/botbuddiesslide1.jpg",
        text: "Bot-Buddies is a mock e-commerce website for consumers to purchase robots.",
      },
      {
        imgName: "Picture2",
        img: "img/chrischen/bot/botbuddiesslide2.png",
        text: "Users can view cart, update item quantities, delete items, and view detailed information for each item.",
      },
      {
        imgName: "Picture3",
        img: "img/chrischen/bot/botbuddiesslide3.png",
        text: "Logged-in users may view list of all previous orders. Selecting a past order provides detailed order information.",
      },
    ],
    para1:
      "Bot-Buddies is a mock e-commerce website for consumers to purchase robots. Looking for a friend? Or a chef? Perhaps feeling lonely in the love department? We’ve got you covered! The site features cart functionality, guest and user checkout, and order history. This website was created in 1 week in an agile team of 4.",
    para2:
      "Technologies: JavaScript, React, Redux, Node.js, Express, Sequelize, PostgreSQL, Semantic UI React",
    buttons: [
      { btnText: "try demo", btnImg: "img/chrischen/footer/externallink2.png" },
      { btnText: "view code", btnImg: "img/chrischen/footer/github3.png" },
    ],
  },
];

export const tech = [
  {
    heading: "frontend",
    TechData: [
      {
        title: "Redux / React Native",
        imgpath: "img/chrischen/frontend/reactlogo2.png",
      },
      { title: "Redux", imgpath: "img/chrischen/frontend/reduxlogo2.png" },
      { title: "HTML", imgpath: "img/chrischen/frontend/htmllogo.png" },
      { title: "CSS", imgpath: "img/chrischen/frontend/csslogo.png" },
      { title: "jQuery", imgpath: "img/chrischen/frontend/jquery.png" },
      {
        title: "bootstrap",
        imgpath: "img/chrischen/frontend/bootstraplogo.png",
      },
      { title: "semantic UI", imgpath: "img/chrischen/frontend/semantic.png" },
      { title: "expo", imgpath: "img/chrischen/frontend/expo.png" },
    ],
  },
  {
    heading: "backend",
    TechData: [
      { title: "node.js", imgpath: "img/chrischen/backend/nodelogo.png" },
      { title: "express", imgpath: "img/chrischen/backend/expresslogo2.png" },
      { title: "Sequelize", imgpath: "img/chrischen/backend/sequelize.png" },
      {
        title: "PostgreSQL",
        imgpath: "img/chrischen/backend/postgreslogo.png",
      },
      {
        title: "Socket.io",
        imgpath: "img/chrischen/backend/socket-io-logo.png",
      },
      { title: "OAuth", imgpath: "img/chrischen/backend/oauth.png" },
      { title: "Passport.js", imgpath: "img/chrischen/backend/passportjs.png" },
    ],
  },

  {
    heading: "devops",
    TechData: [
      { title: "git", imgpath: "img/chrischen/devops/gitlogo.png" },
      { title: "github", imgpath: "img/chrischen/devops/githublogo.png" },
      { title: "npm", imgpath: "img/chrischen/devops/npm.png" },
      { title: "webpack", imgpath: "img/chrischen/devops/webpack.png" },
      { title: "Heroku", imgpath: "img/chrischen/devops/heroku.png" },
      { title: "Travis CI", imgpath: "img/chrischen/devops/travis.png" },
    ],
  },
  {
    heading: "languages",
    TechData: [
      { title: "javaScript", imgpath: "img/chrischen/languages/jslogo.png" },
      { title: "c++", imgpath: "img/chrischen/languages/c++.png" },
      { title: "c#", imgpath: "img/chrischen/languages/csharplogo.png" },
      { title: "java", imgpath: "img/chrischen/languages/java.png" },
    ],
  },
  {
    heading: "tools",
    TechData: [
      { title: "vs code", imgpath: "img/chrischen/tools/vscode.png" },
      { title: "postman", imgpath: "img/chrischen/tools/postman.png" },
      { title: "postico", imgpath: "img/chrischen/tools/postico.png" },
      { title: "unity", imgpath: "img/chrischen/tools/unity.png" },
    ],
  },
  {
    heading: "testing",
    TechData: [
      { title: "mocha", imgpath: "img/chrischen/testing/mocha.png" },
      { title: "chai", imgpath: "img/chrischen/testing/chai.png" },
      { title: "jasmine", imgpath: "img/chrischen/testing/jasmine.png" },
    ],
  },
];
