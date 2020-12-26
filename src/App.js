import React, { useState, useEffect} from "react";
import './App.css';
import Header from "./components/Heaader"
import Recipes from "./components/Recipes"
import axios from "axios";


function App() {
  
  

  const [search, setSearch] = useState("Chicken");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);
  
  const getRecipes = async () => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    console.log(res);
    setRecipes(res.data.meals);
  }

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} />
      <div className="container">
        <Recipes recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
