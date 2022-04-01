document.querySelector("form").addEventListener("submit", formSubmit);
var userstack = JSON.parse(localStorage.getItem("userdatabase")) || [];;

function formSubmit(event) {
    event.preventDefault();
    var firstname = document.querySelector("#name").value;
  
    var email = document.querySelector("#email").value;
    var user = document.querySelector("#user").value;
    var pass = document.querySelector("#pass").value;

    var userdata = {
        frstname: firstname,
        emailid: email,
        usercont: user,
        passwrd: pass,

    };

    userstack.push(userdata);

    localStorage.setItem("userdatabase", JSON.stringify(userstack));
    alert("singup success");
    window.location.href = 'index.html';

}