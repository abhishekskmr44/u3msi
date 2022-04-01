function main(){
    var user_stack = []; 
    var std_name = document.getElementById("Name").value;
    var std_num = document.getElementById("Number").value;
    var std_city = document.getElementById("City").value;

  function student_data(a,b,c){
      this.name = a;
      this.number = b;
      this.city = c;
  }

  var person = new student_data(`My name is ${std_name}`,`Ping me in ${std_num}`,`I am from ${std_city}`);
  //console.log(person);

  user_stack.push(person);
  console.log(user_stack);

  localStorage.setItem("students",JSON.stringify(user_stack));
document.location.href=`display.html`;
}

