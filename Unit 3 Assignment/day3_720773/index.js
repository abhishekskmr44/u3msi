//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.


function scope(){
    var displays = document.getElementById("display");
    displays.innerHTML = "";
    var user = [];

var x = "I)Scope determines the accessibility (visibility) of variables II)JavaScript has 3 types of scope.Before ES6 (2015), III)JavaScript had only Global Scope and Function Scope. IV)ES6 introduced two important new JavaScript keywords: let and const. V)These two keywords provide Block Scope in JavaScript."


user.push(x);
console.log(user);

localStorage.setItem("scope",JSON.stringify(user));

displays.append(x)
}



function hoisting(){
    var displays = document.getElementById("display");
    displays.innerHTML = "";
    var user = [];

var x = "I)Hoisting is JavaScript's default behavior of moving declarations to the top II)In JavaScript, a variable can be declared after it has been used. III)In other words; a variable can be used before it has been declared IV)Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)."


user.push(x);
console.log(user);

localStorage.setItem("Hoisting",JSON.stringify(user));

displays.append(x)
}


function construtor(){
    var displays = document.getElementById("display");
    displays.innerHTML = "";
    var user = [];

var x = "I)The examples from the previous chapters are limited. They only create single objects.Sometimes we need a blueprint for creating many objects of the same type. II)The way to create an object type, is to use an object constructor function. III)In an object method, this refers to the object,Alone, this refers to the global object IV)In a function, this refers to the global object. "


user.push(x);
console.log(user);

localStorage.setItem("construtor",JSON.stringify(user));

displays.append(x)
}



function prototype(){
    var displays = document.getElementById("display");
    displays.innerHTML = "";
    var user = [];

var x = "I)JavaScript objects inherit properties and methods from a prototype  II)Data objects inherit from Data.prototype III)Array objects inherit from Array.prototype IV)In function, this refers to the global object. ";

user.push(x);
console.log(user);

localStorage.setItem("prototype",JSON.stringify(user));

displays.append(x)
}