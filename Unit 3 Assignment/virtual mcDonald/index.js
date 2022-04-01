async function Order() {
    try{
    // let status = "open";

    let order = document.getElementById("food").value;
    let time = Math.round(Math.random()*5);
  
    
    let message = `${order} will resolve after 5 seconds.`;

    alert(message);

    let food_promise = new Promise(function (resolve, reject) {
      
      setTimeout(function () {
        if(document.querySelector("#food").value =="Coffee"){
          // console.log("Burger");
          var img1 = document.createElement("img");
          img1.src = "https://th.bing.com/th/id/OIP.NbwGiybtyeFLd8sF8wjkegHaEK?pid=ImgDet&rs=1"
          document.querySelector("#sam").append(img1)
        }
        else if (document.querySelector("#food").value =="burger"){
          var img2 = document.createElement("img");
          img2.src = "https://th.bing.com/th/id/OIP.uVquU7xaBP1EB_M3ejraTQHaE8?pid=ImgDet&rs=1"
          document.querySelector("#sam").append(img2)
        }
      else if (document.querySelector("#food").value =="pizza"){
          var ing3 = document.createElement("img");
          ing3.src = "https://s.hdnux.com/photos/01/10/42/21/19014778/3/rawImage.jpg"
          document.querySelector("#sam").append(ing3)
        }
        else if (document.querySelector("#food").value =="shake"){
          var img4 = document.createElement("img");
          img4.src = "https://elisetriestocook.com/wp-content/uploads/2020/10/Boozy-Milkshake-Up-Close-1229x1536.jpg"
          document.querySelector("#sam").append(img4)
        }
        resolve(`${order} ID-- 99`);
   
      }, time * 5000);
    });
    food_promise.then(function (res) {
        alert(res);
  
      });
    let res = await food_promise; async function Order() {
        try{
        // let status = "open";
    
        let order = document.getElementById("food").value;
        let time = Math.round(Math.random()*5);
      
        
        let message = `${order} will resolve after 5 seconds.`;
    
        alert(message);
    
        let food_promise = new Promise(function (resolve, reject) {
          
          setTimeout(function () {
            if(document.querySelector("#food").value =="Coffee"){
              // console.log("Burger");
              var img1 = document.createElement("img");
              img1.src = "https://th.bing.com/th/id/OIP.NbwGiybtyeFLd8sF8wjkegHaEK?pid=ImgDet&rs=1"
              document.querySelector("#sam").append(img1)
            }
            else if (document.querySelector("#food").value =="burger"){
              var img2 = document.createElement("img");
              img2.src = "https://th.bing.com/th/id/OIP.uVquU7xaBP1EB_M3ejraTQHaE8?pid=ImgDet&rs=1"
              document.querySelector("#sam").append(img2)
            }
          else if (document.querySelector("#food").value =="pizza"){
              var ing3 = document.createElement("img");
              ing3.src = "https://s.hdnux.com/photos/01/10/42/21/19014778/3/rawImage.jpg"
              document.querySelector("#sam").append(ing3)
            }
            else if (document.querySelector("#food").value =="shake"){
              var img4 = document.createElement("img");
              img4.src = "https://elisetriestocook.com/wp-content/uploads/2020/10/Boozy-Milkshake-Up-Close-1229x1536.jpg"
              document.querySelector("#sam").append(img4)
            }
            resolve(`${order} ID-- 86`);
       
          }, time * 5000);
        });
        food_promise.then(function (res) {
            alert(res);
      
          });
        let res = await food_promise;
        console.log("res:", res)
    }
    catch (err){
    console.log("err:", err)
    }
     
    }
    
        
    console.log("res:", res)
}
catch (err){
console.log("err:", err)
}
 
}


  