var moviesData = [
    {
      image_url:
        "https://images.livemint.com/img/2021/05/14/1600x900/Pushpa_1620969459135_1620969466386.jpg",
      name: "PUSHPA THE RISE",
      catagory: "ACTION, DRAMA",
      star: 7.9
      
    },

    {
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNDI3M2E5ZGQtZjVlNS00NzFhLTg0NTAtZDZmOTBjODg3ZDQ1XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_.jpg",
      name: "SURYAWANSHI ",
      catagory: "ACTION",
      star: 6.2,
      
    },
    {
      image_url:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
      name: " Spider-Man: No Way Home",
      catagory: "ACTION, ADVENTURE, FANTASY",
      star: 8.7,
      
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg/220px-Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
      name: "Shang-Chi and the Legend of the Ten Rings",
      catagory: "ACTION, ADVENTURE, FANTASY",
      star: 7.5,
     
    },
    {
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      name: "Venom: Let There Be Carnage ",
      catagory: "ACTION, ADVENTURE, SCI-FI",
      star: 6.0,
     
    },
    {
      image_url:
        "https://m.media-amazon.com/images/I/81oQdDUC5qL._SL1500_.jpg",
      name: " F9: The Fast Saga ",
     catagory: "ACTION, CRIME, TRILLER",
      star: 5.2,
     
    },
    {
      image_url:
        "https://thelogicalindian.com/h-upload/2021/11/21/207096-jai-bhim-controversy-website.jpg/",
      name: " JAI BHIM ",
      catagory: "CRIME, DRAMA",
      star: 9.3,
      
    },
    {
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg",
      name: "MASTER  ",
      catagory: "ACTION, THRILLER",
      star: 7.8,
      
    },
    {
      image_url:
        "https://i.ytimg.com/vi/W_M1TrI68nQ/maxresdefault.jpg",
      name: "SARDAR UDHAM ",
      catagory: "BIOGRAPHY CRIME DRAMA",
      star: 8.7,
     
    },

];

localStorage.setItem("moviesData", JSON.stringify(moviesData));




var moviesData = JSON.parse(localStorage.getItem("moviesData"));
 


displayData(moviesData);



function handleRatingSort() {
  var selected = document.querySelector("#rateSort").value;
  
  if (selected == "high") {
   
    moviesData.sort(function (a, b) {
      return Number(b.star) - Number(a.star);
    });
  }
  if (selected == "low") {
   
    moviesData.sort(function (a, b) {
      return Number(a.star) - Number(b.star);
     
    });
   
  }

  location.reload

  console.log(moviesData);
  displayData(moviesData);
}

function displayData(moviesData) {
  document.querySelector("#movies").innerHTML = "";

  moviesData.map(function (data) {
    
    var div = document.createElement("div");
    
    var image = document.createElement("img");
    image.setAttribute("src", data.image_url);

   

    var name = document.createElement("p");
    name.textContent = data.name;

    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var p1 = document.createElement("p");
    p1.textContent = data.star;

    var p2 = document.createElement("p");
    p2.textContent = data.catagory;
    

    div2.append(p1, p2);
    div.append(image, name, div2)
    document.querySelector("#movies").append(div);
  
  });
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
   setInterval(showSlides, 2000);
  
}
