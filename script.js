
//Code For Email Validation and Checking
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return true;
}




function login(){
    let mail = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    
    console.log(mail,pwd);
    let gmail=[{email:"raguram24@gmail.com",password:"ragu"},{email:"abiram21@gmail.com",password:"abi"},{email:"mathu02@gmail.com",password:"mathu"},{email:"mithuna18@gmail.com",password:"mini"},{email:"ananthy23@gmail.com",password:"anan"}];
    if(validateEmail(mail)){
        console.log('came inti if');
    for(let i=0;i<gmail.length;i++){
        if(mail === gmail[i].email){
            if(pwd === gmail[i].password){
                return alert("Login successful");
            }
            else{
                return alert("Incorrect PassWord.")
            }
            
        }
        
        
    }
    return alert("Login Unsucessful");
    

    
}


}


// Code for password Validation in Signup Form.


var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var userName = document.getElementById("signUpName");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block"
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none"
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  // Validate Special Characters
  var specialCharacters = /[$&+,:;=?@#|'<>.-^*()%!]]/g;
  if(myInput.value.match(specialCharacters)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length <= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}



//Code For Saving User Datas

let userDetails = [{name:"",email:"",pwd:""}];


// code for Add Tv  show

function myFunction(add) {
  var letters = /^[A-Za-z]+$/;
  if(add[0].match(letters)){
  
  document.getElementById('print').innerHTML = add + " has been added";
  console.log(add)
  }
  else {
  
  document.getElementById('print').innerHTML = "Invalid TV Show Name";
  }
  }



