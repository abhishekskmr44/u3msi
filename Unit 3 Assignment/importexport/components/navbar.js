function navbar() {


  
    return `<div id="navbar">
    <div>
      <h3> <a href="/">Food  Recipes</a> </h3>
      </div>
      <div id = "s">
  
      <input type="text" id="food" placeholder="Search receipes">
  
      <button id="btn">Search</button>
  </div>
    <div class="options">
      <h3><a href="random.html">Recipe of the day</a></h3>
      <h3><a href="Latest.html">Latest Recipe</a></h3>
     
    </div>
  </div>`
};

export default navbar;
