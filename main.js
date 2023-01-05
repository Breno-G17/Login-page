// fetching elements via DOM
var emailError = document.querySelector("#email-error");
var passwordError = document.querySelector("#password-error");


// Validation functions 
function validateEmail() {
  var emailInput = document.querySelector("#email-field");
  let email = emailInput.value;

  if(email === "" || email === null) {
    emailError.innerHTML = 'email is required';
    return false;
  }
  if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = 'email is invalid';
    return false;
  }

  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validatePassword() {
  var passwordInput = document.querySelector("#password-field");
  let password = passwordInput.value;

  if (password === '' || password.length === null) {
    passwordError.innerHTML = 'password is required';
    return false;
  } else {
    passwordError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
  }
}