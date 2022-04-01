async function getData(url) {
    try{
    
    let res = await fetch(url)
    
    let data = await res.json();
     data = data.meals
    return data;
      
    } catch (err) {
        console.log("err:", err)
    }
    }
    
    function appendData(data,parent) {
    
    data.forEach((el) =>{
    
    let div= document.createElement(`div`)
    div.setAttribute("id", "flex");
    
    let img = document.createElement(`img`)
    img.src= el.strMealThumb;
    var div2 = document.createElement("div");
          div2.setAttribute("id", "flo");
    let h1 = document.createElement(`h1`)
    h1.innerText = el.strMeal
    var div3 = document.createElement("div");
          div3.setAttribute("id", "flow");
          let p1 = document.createElement(`p`)
          p1.innerHTML =el.strIngredient1;
          let p2 = document.createElement(`p`)
          p2.innerHTML =el.strIngredient2;
          let p3 = document.createElement(`p`)
          p3.innerHTML =el.strIngredient3;
          let p4 = document.createElement(`p`)
          p4.innerHTML =el.strIngredient4;
          let p5 = document.createElement(`p`)
          p5.innerHTML =el.strIngredient5;
          let p6 = document.createElement(`p`)
          p6.innerHTML =el.strIngredient6;
          let p7 = document.createElement(`p`)
          p7.innerHTML =el.strIngredient7;
          let p8 = document.createElement(`p`)
          p8.innerHTML =el.strIngredient8;
    let h6 = document.createElement(`h6`)
    h6.innerHTML = el.strInstructions;
    
    div3.append(p1,p2,p3,p4,p5,p6,p7,p8)
    div2.append(h1,div3,h6,)
    
    div.append(img,div2);
    
    parent.append(div);
    });
    }
    
    export {getData, appendData};