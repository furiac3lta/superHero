import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Heros from "./components/Heros";

function App() {
  const [hero, setHero] = useState();
  const getAllHeroes = () => {
    const url =
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
    axios
      .get(url)
      .then((res) => {
        setHero(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllHeroes();
  }, []);

  return (
    <div className="App">
      <h1>Super Hero Api</h1>
     
      {<Heros hero={hero} />}
    </div>
  );
}

export default App;
