import React from "react";

const Header = (props) => {
    const { search, onInputChange} = props;
    return (
        <div className="jumbtron">
            <h1 className="display-1"><span class="material-icons brand-icon">
menu_book
</span> Food Recipe</h1>
        <h1>
        <div class="input-group w-50 mx-auto">
  <input type="text" class="form-control" placeholder="Search Your Recipe..." value = {search}
  onChange = {onInputChange}
  />
  <button className="btn btn-dark">Search Recipe</button>
    </div>
        </h1>
        </div>
    )
}

export default Header;