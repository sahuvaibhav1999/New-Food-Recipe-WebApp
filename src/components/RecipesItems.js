import React from "react";

const RecipeItem = props => {
    const { strMeal, strMealThumb } = props;
    return(
        <div class="col-md-3">
            <div class="card py-2 text-center" >
                <img src={strMealThumb} class="Thumb" />
                <div class="card-body">
                    <h5>{strMeal}</h5>
                </div>
                
            </div>

         </div>
    )
}

export default RecipeItem;