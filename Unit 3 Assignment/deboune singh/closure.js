//d806bd70

async function searchMovie() {
    // get the movie name
    try {
    let movie = document.getElementById(`querry`).value
    
    let res = await fetch (`https://www.omdbapi.com/?apikey=d806bd70&s=${movie}`)
    let data = await res.json();
    // console.log("data:", data);
    return data.Search;
    
    } catch (err) {
       console.log("err:", err);
    }
    
    }
    
    async function main() {
    
    let data = await searchMovie();
    
    if(data === undefined) {
        return false;
    }
    appendData(data);
    // console.log("data:", data);
    }
    let movies_div = document.getElementById(`movies`)
     function appendData(movies) {
         movies_div.innerHTML = null;
    
        movies.forEach(function(el) {
            var div = document.createElement("div");
           div.setAttribute("id", "sam",)
    let img = document.createElement(`img`)
    img.setAttribute("src", el.Poster);
    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");
    
    let p1 = document.createElement("p")
            p1.textContent = el.Title
            p1.addEventListener("click", function(){
                details(el)
            })
    
    var p2 = document.createElement("p");
    p2.textContent = "Year:-"+ el.Year;
    
    
    div2.append(p1, p2);
    div.append(img,div2);
    document.querySelector("#movies").append(div);
        });
    
     }
     
     var div2 = document.getElementById("result")
    
    function details(elem){
        document.getElementById("result").innerHTML = null;
        var name = document.createElement("p")
        name.textContent= elem.Title
        
        var year = document.createElement("p")
        year.textContent ="Year:-"+ elem.Year;
    
    
        var imbdb = document.createElement("p")
        imbdb.textContent = elem.imdbID
    
        var poster = document.createElement("img")
        poster.setAttribute("src", elem.Poster)
        
        console.log(elem)
    
        
        div2.append(name, year, imbdb, poster)
    
     }
           
    
    
    
    //a -> oninput -- debounce() --main("a") -- stetimeout(main, 1000)
    //av   ' ' ' ''  ' ' ' '' ' ' ' '  '' '' ' ' '
    //ave ''     '' ' ' '' '      '' ' '' ' 
    
    
     let timerId;
    
     function debounce(func, delay) {
         
         if(timerId){
    clearTimeout(timerId);
         }
    
     timerId = setTimeout(function() {
        func();
    }, delay);
    
     }