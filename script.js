function hello(){
  alert("Welcome to Sportbike Passion!");
}

function validateForm(){
  let name = document.getElementById("name").value;
  if(name==""){
    alert("Please enter your name");
    return false;
  }
}
