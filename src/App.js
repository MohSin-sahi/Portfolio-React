import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Overview from "./Overview.js";
import Project from "./Project.js";
import Work from "./Work.js";
import Contact from "./Contact.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Overview />
      <Project />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
