import navbar from "./components/navbar.js";
// console.log(navbar);

let navbar_div = document.getElementById(`navbar-container`)
navbar_div.innerHTML = navbar();

 
//let data = document.getElementById("data");

document.getElementById("btn").addEventListener("click", myfunction)
async function myfunction() {
try{
   let userInput = document.getElementById("food").value;
    console.log(userInput);
let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
let data = await res.json();

 console.log("data:",data);
 const foodlist = data.meals;
    
//  console.log(foodlist);

 displayData(foodlist);
 


}catch (err){
   console.log("wrong:", err) 

}
}

// getfoodData()
// }
//  {"meals":[{"idMeal":"52771","strMeal":"Spicy Penne","strDrinkAlternate":null,"strCategory":"Vegetarian","strArea":"Italian","strInstructions":"Bring a 

 function displayData(foodlist)  {
      data.innerHTML = "";

     foodlist.map(function(el) {

       
       let div = document.createElement("div")
     

let img = document.createElement(`img`)
      img.src = el.strMealThumb;
      
      
        let h4 = document.createElement(`h4`)
        h4.innerHTML = el.strMeal;
      
        

       div.append(img,h4);

      document.querySelector("#data").append(div)


    });

}