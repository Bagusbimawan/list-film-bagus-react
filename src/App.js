import "./App.css";
import Navigationbar from "./components/navigation";
import Intro from "./components/intro";
import "./style/landingpage.css";
import Trending from "./components/trending";
import SuperHero from "./components/superhero";

function App() {
  return (
    <div>
      <div className="myBG">
        <Navigationbar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <SuperHero/>
      </div>
    </div>
  );
}

export default App;
