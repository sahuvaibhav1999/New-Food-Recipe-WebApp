import React from "react";

const Recipes = (props) => {
    const {recipes} = props;
    return (
        <div className="row">
            {
                recipes.map(recipe => (
                    <div class="col-md-3">
                        <div class="card py-2 text-center" >
                            <img src={recipe.strMealThumb} class="Thumb" />
                            <div class="card-body">
                                <h5>{recipe.strMeal}</h5>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Recipes;