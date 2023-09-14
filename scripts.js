/*-------------login------------*/
var myform = document.getElementById("login_form");
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Gijo" && password == "Admin@123") {
        alert("Login successfully");
        window.location = "index.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}


/*--------------------registration------------*/

var register = document.getElementById("form-reg");
function regvalidate(){
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    
    if (Name(name)) {
    }
    if (UserName(username)) {
    }
    if (Phone(phone)){
    }
    if (Email(email)){
    }
    if(Password(password)){
    }
    return false;
}

    function Name(name) {
        var message = document.getElementsByClassName("error-message");
        
        var letters = /^[A-Za-z]+$/;
        
        if ( name == "" || name.match(letters)) {
          text="";
          message[0].innerHTML = text;
          return true;
        }
        
        else {
          text="Name should contain only letters";
          message[0].innerHTML = text;
          return false;
        }
}
function  UserName(username) {
    var message = document.getElementsByClassName("error-message");
    var letters = /^[A-Za-z]+$/;
    if ( username == " " || username.match(letters)) {
      text="";
      message[1].innerHTML = text;
      return true;
    }
    
    else {
      text="User name should contain only letters";
      message[1].innerHTML = text;
      return false;
    }
  }
  function  Phone(phone) {
    var message = document.getElementsByClassName("error-message");
    var numbers = /^[0-9]+$/;
    if ( phone ==" " || phone.match(numbers)) {
      text="";
      message[2].innerHTML = text;
      return true;
    }
    
    else {
      text="Phone number should contain only numbers";
      message[2].innerHTML = text;
      return false;
    }
  }

   
  function Email(email) {
    var message = document.getElementsByClassName("error-message");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
            
    if ( email == " " || email.match(mailformat) || atpos > 1 && ( dotpos - atpos > 2 )) {
      text="";
      message[3].innerHTML = text;
      return true;
    }
           
    else {
      text="Wrong email format";
      message[3].innerHTML = text;
      return false;
    }
  }
        
  function Password(password) {
    var message = document.getElementsByClassName("error-message");
    var illegalChars = /[\W_]/; // allow only letters and numbers
    if (illegalChars.test(password)) { 
      text="Password contains illegal characters";
      message[4].innerHTML = text;
      return false;
    }
    else if ( (password.search(/[0-9]+/)==-1) ) {
      text="Password should contain at least one number";
      message[4].innerHTML = text;
      return false;
    }
    else {
      text="";
      message[4].innerHTML = text;
      return true;
    }
  }
  message.innerHTML = null;
     
     

