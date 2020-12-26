import React, { useState, useEffect} from "react";
import './App.css';
import Header from "./components/Heaader"
import Recipes from "./components/Recipes"
import axios from "axios";


function App() {
  
  

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [Ing, setIngredient] = useState([]);
  const [Fav, setFav] = useState([]);

  const getIng =(meal) =>{

    for(var i=1; i<=20; i++){
      if(meal[0][`strIngredient${i}`]){
       // console.log(`${meal[0][`strIngredient${i}`]} -  ${meal[0][`strMeasure${i}`]}`);
        const newIng = [...Ing];
        newIng.push(
          `${meal[0][`strIngredient${i}`]} -  ${meal[0][`strMeasure${i}`]}`
        );
        setIngredient(newIng);  
      } else{
        break;
      }
    }
  }

  useEffect(() => {
    const getRandom= async() => {
      const re1 = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
      var v1 = re1.data.meals;
      const upM = [];
      for(let meal of v1 ){
        let temp = {};
        let temp1 = [];
        for( let key in meal){
          if(key.startsWith("strIngredient")){
            if(meal[key])
            temp1.push(meal[key]+" - "+meal["strMeasure"+key[13]+(key[14]>="0" && key[14]<="9"? key[14]: "")]);
          }
          else if(!key.startsWith("strMeasure")){
            temp[key] = meal[key];
          }
        }
        temp["strIngredient"]=temp1;
        upM.push(temp);
       // console.log(upM)
      }
      setRecipes(upM);
    //  getIng(re1.data.meals);
     // setRecipes(re1.data.meals);
    };
    getRandom();
    
  }, []);
  
  useEffect(() =>{
      {/*console.log("Hello")*/}
    for (let j=0; j<recipes.length; j++){
      for(var i=1; i<=20; i++){
        if(recipes[j][`strIngredient${i}`]){
         // console.log(`${recipes[j][`strIngredient${i}`]} -  ${recipes[j][`strMeasure${i}`]}`);
          const newIng = [...Ing];
          newIng.push(
            `${recipes[j][`strIngredient${i}`]} -  ${recipes[j][`strMeasure${i}`]}`
          );
          setIngredient(newIng);  
        } else{
          break;
        }
      }
    }
  },recipes)
  const getRecipes = async () => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    getIng(res.data.meals);
    
    var v1 = res.data.meals;
      const upM = [];
      for(let meal of v1 ){
        let temp = {};
        let temp1 = [];
        for( let key in meal){
          if(key.startsWith("strIngredient")){
            if(meal[key])
            temp1.push(meal[key]+" - "+meal["strMeasure"+key[13]+(key[14]>="0" && key[14]<="9"? key[14]: "")]);
          }
          else if(!key.startsWith("strMeasure")){
            temp[key] = meal[key];
          }
        }
        temp["strIngredient"]=temp1;
        upM.push(temp);
      }
      setRecipes(upM);
    //  console.log(upM)
    //setRecipes(res.data.meals);
  }

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }

  const setFavr = (item) => {
    const newFav = [...Fav];
    newFav.push(item);
    setFav(newFav);
    {/*Fav.push(item);
    console.log(Fav);*/}

  }
  const unSetFavr = (item) =>{
    const newFav = [...Fav];


     newFav.splice(newFav.indexOf(item), 1);
     setFav(newFav);
  }

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} getRecipes={getRecipes}/>
      <div className="container">
        <Recipes recipes={recipes} Ing={Ing} setFavr={setFavr} Fav={Fav} unSetFavr={unSetFavr}/>
      </div>
    </div>
  );
}

export default App;
