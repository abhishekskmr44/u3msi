document.querySelector("form").addEventListener("submit", Login);
var registrdusers = JSON.parse(localStorage.getItem("userdatabase"));
function Login(event) {
    event.preventDefault();
    var email = document.querySelector("#userid").value;
    var pass = document.querySelector("#pass").value;

    var count = 0;
    for (var i = 0; i < registrdusers.length; i++) {
        console.log(registrdusers[i].emailid, registrdusers[i].passwrd);
        if (registrdusers[i].emailid == email && registrdusers[i].passwrd == pass) {
            alert("Successful login")
            window.location.href = 'index.html';
        }
        else if (registrdusers[i].emailid !== email || registrdusers[i].passwrd !== pass) {
            count++;
            if (count == registrdusers.length) {
                alert("Wrong Credentials")
            }
        }
    }
}