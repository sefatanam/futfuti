import React, { useEffect, useState } from "react";
import Recipie from "./Recipie";
// import logo from '../logo.svg'

import "../App.css";

const App = () => {
  const API_ID = "cce9de51";
  const API_KEY = "d41c8415697335459974b582339612f6";
  // const requestHTTP = ;

  // const [count, setCount] = useState(0);

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );

    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  };

  const updateChange = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateChange}
          placeholder="Search Food"
        />
        <button className="search-button" type="submit">
          Search Button
        </button>
      </form>
      <div className="recipes">
        {recipies.map((item) => (
          <Recipie
            key={item.recipe.calories}
            title={item.recipe.label}
            calories={item.recipe.calories}
            image={item.recipe.image}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </div>
      {/* <h1 onClick={() => setCount(count + 1)}>{count}</h1> */}
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello World</h1>
//     </div>
//   );
// }

export default App;
