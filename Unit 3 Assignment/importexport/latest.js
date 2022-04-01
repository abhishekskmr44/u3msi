import navbar from "./components/navbar.js";
// console.log(navbar);
import {getData, appendData } from "./scripts/showdata.js";


let navbar_div = document.getElementById(`navbar-container`)
navbar_div.innerHTML = navbar();
let url = "https://www.themealdb.com/api/json/v1/1/random.php"

let res =  await getData(url);
// console.log("res:" , res)


let parent = document.getElementById("data")
appendData(res, parent)