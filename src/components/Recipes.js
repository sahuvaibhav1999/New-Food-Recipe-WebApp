import React from "react";
//import YouTube from "react-youtube";
const Recipes = (props) => {
    const {recipes,Ins,setFavr,Fav,unSetFavr} = props;
    


    
    return (
        <div className="row">
            {
                recipes.map(recipe => (
                    <div class="col-md-3">
                        <div class="sub-main" >
                            <img src={recipe.strMealThumb} class="Thumb" alt="recipe_img" />
                            <div class="">
                                <h5 class="hstr"><u>{recipe.strMeal}</u></h5>
                                {
                                    (!Fav.includes(recipe)) ? (
                                        <button class="but" type="button" onClick={() => setFavr(recipe)}>Fav</button>
                                    ): (
                                        <button class="but" type="button" onClick={() => unSetFavr(recipe)}>Not Fav</button>
                                    ) 
                                }
                                <p class="pC"><strong><u>Category</u> : </strong>
                                    {recipe.strCategory}</p>
                                <p><strong><u>Area</u> : </strong>
                                    {recipe.strArea}</p>
                                <p><strong><u>Tags</u> : </strong>
                                    {recipe.strTags}</p>
                            </div>
                            <div class="column seven" id="ing">

                            <h5 class="h5ing"><u>Ingredients</u> :-</h5>
                            <ul>
                                {
                                    recipe.strIngredient.map ((item) => {
                                        return <li>{item}</li>
                                    })
                                }
                            </ul>
                            </div>
                            <div class="" id="ins"><h5><u>Instructions</u> :-</h5>
                                <p>{recipe.strInstructions}</p>
                            </div>
                            <div class="row">
                                <h5 class="video"><u>Recipe Video</u></h5>
                                <div class="videoWrapper">
                                    <iframe class="if" src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title="Tutorial"/>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Recipes;