const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

function addUserToLocal() {
  if (localStorage) {
    var emailInput = document.getElementById("emailSignUp");
    var passwordInput = document.getElementById("passwordSignUp");
    var confirmPasswordInput = document.getElementById("confirmPasswordSignUp");
    var nameInput = document.getElementById("nameSignUp")
    var surnameInput = document.getElementById("surnameSignUp")
    var counter = 0;
    
      if (localStorage.getItem("counter") === null) {
        localStorage.setItem("counter", counter);
      } else {
        counter = localStorage.getItem("counter");
      }
      if(isExists(emailInput.value)){
        if(checkMinimumLength(passwordInput.value)){
          if (passwordInput.value === confirmPasswordInput.value) {
      var userData = {
        user_name:nameInput.value,
        user_surname:surnameInput.value,
        user_email: emailInput.value,
        user_password: passwordInput.value,
        score: [],
      }; 
      counter++;
      localStorage.setItem("user" + counter, JSON.stringify(userData));
      localStorage.setItem("counter", counter);
      //alert("Welcome!");
      login(emailInput,passwordInput)
      document.querySelector(".form-inner .signup").action = "mainPage.html"
    } else {
      alert("Your passwords do not match. Please try again.");
      confirmPasswordInput.value = ""
      passwordInput.value = ""
    
    }
  }  
} else {
  alert("This user exists!")
  emailInput.value = ""
  passwordInput.value = ""
  confirmPasswordInput.value = ""
  nameInput.value = ""
  surnameInput.value = ""
}
}
}

function isExists(email){

  var counter = localStorage.getItem("counter")
  var checkArray = [];
  for (let i = 1; i <= counter; i++) {
    checkArray.push(localStorage.getItem("user" + i));
  }
  var flag = false;
  for (let i = 0; i < counter; i++) {
    var obj = JSON.parse(checkArray[i]);
        if(email !== obj.user_email){
          flag =  true;
        } else {
          flag =  false;
        }
  }
  if(flag || counter == 0) {
    return true;
  } else {
    return false;
  }
}

function checkMinimumLength(password){
  if (password.length < 6){
    alert("Your password must be at least 6 characters.")
    document.getElementById("emailSignUp").value = ""
    document.getElementById("passwordSignUp").value = ""  
    document.getElementById("confirmPasswordSignUp").value = ""
    return false;
  } else {
    return true;
  }
}

function login(emailInput,passwordInput) {
  if(!emailInput){
    var emailInput = document.getElementById("emailLogIn");
    var passwordInput = document.getElementById("passwordLogIn");
  }
  var checkArray = [];
  var counter = localStorage.getItem("counter");
  for (let i = 1; i <= counter; i++) {
    checkArray.push(localStorage.getItem("user" + i));
  }
  var flag = false;
  // console.log(obj.user_email)
  for (let i = 0; i < counter; i++) {
    var obj = JSON.parse(checkArray[i]);
    if (emailInput.value === obj.user_email) {
        if(passwordInput.value === obj.user_password){
          flag = true;
          alert("Welcome!");
          var currentUser = i + 1
          localStorage.setItem("currentUser" , currentUser)
          document.querySelector(".form-inner .login").action = "mainPage.html"
        } else {
          alert("Your password is incorrect!")
          flag = true
          passwordInput.value = ""
        }
  }
}
if(!flag) {
  alert("Your email is incorrect!")
  emailInput.value = ""
  passwordInput.value = ""
}
}
