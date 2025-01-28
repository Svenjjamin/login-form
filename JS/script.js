// ------ Animation ------

const switchLoginButton = document.querySelector("#signIn");  // select ID signIn
const switchSignupButton = document.querySelector("#signUp");
const loginForm = document.getElementById("logInForm");     
const signupForm = document.getElementById("signUpForm");



switchSignupButton.addEventListener("click", () => {
  signupForm.style.left = "50%";
  signupForm.style.opacity = "1";
  loginForm.style.left = "-50%";
  loginForm.style.opacity = "0";

  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");

  //Remove incorrect class. Variables are defined in validation.js
  allInputs.forEach(input => {
      if(input.parentElement.classList.contains('incorrect')){
        input.parentElement.classList.remove('incorrect');
        errorMessageLogIn.innerText = '';
        errorMessageSignUp.innerText = '';
      }
      input.value = ''
  })
})  

switchLoginButton.addEventListener("click", () => {
  signupForm.style.left = "150%";
  signupForm.style.opacity = "0";
  loginForm.style.left = "50%";
  loginForm.style.opacity = "1";

  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  
  allInputs.forEach(input => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect');
      errorMessageLogIn.innerText = '';
      errorMessageSignUp.innerText = '';
    }
    input.value = ''
  })
})


//------ Toggle Visibility ------
const visionPwLogin = document.getElementById("visionPwLogin");
const visionPwSignup = document.getElementById("visionPwSignup");
const visionRepSignup = document.getElementById("visionRepSignup");

visionPwLogin.addEventListener("click", () => {
  if(passwordInput.getAttribute("type") === "password"){
    passwordInput.setAttribute("type", "text");
    visionPwLogin.src = "../Login-Form/pictures/visibility_off.svg";
  }
  else{
    passwordInput.setAttribute("type", "password");
    visionPwLogin.src = "../Login-Form/pictures/visibility_on.svg";
  }
})

visionPwSignup.addEventListener("click", () => {
  if(passwordSignUp.getAttribute("type") === "password"){
    passwordSignUp.setAttribute("type", "text");
    visionPwSignup.src = "../Login-Form/pictures/visibility_off.svg";
  }
  else{
    passwordSignUp.setAttribute("type", "password");
    visionPwSignup.src = "../Login-Form/pictures/visibility_on.svg";
  }
})

visionRepSignup.addEventListener("click", () => {
  if(repeatInput.getAttribute("type") === "password"){
    repeatInput.setAttribute("type", "text");
    visionRepSignup.src = "../Login-Form/pictures/visibility_off.svg";
  }
  else{
    repeatInput.setAttribute("type", "password");
    visionRepSignup.src = "../Login-Form/pictures/visibility_on.svg";
  }
})


/*
const googleButtonLogin = document.getElementById("googleButtonLogin");
const facebookButtonLogin = document.getElementById("facebookButtonLogin");
const linkedinButtonLogin = document.getElementById("linkedinButtonLogin");
const githubButtonLogin = document.getElementById("githubButtonLogin");
const socialIconButtons = document.getElementsByClassName("social-icons-bt");
googleButtonLogin.addEventListener("click", () => {
  usernameInput.value = ''
  usernameInput.placeholder = "Google email adress"
  passwordInput.value = ''

  document.querySelector('.activeButton')?.classList.remove('activeButton')
      //the ? prevents the script from causing errors, if there is no activeButton.
  googleButtonLogin.classList.add('activeButton')

  allInputs.forEach(input => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      errorMessageLogIn.innerText = ''
      errorMessageSignUp.innerText = ''
    }
  })
})
facebookButtonLogin.addEventListener("click", () => {
  usernameInput.value = ''
  usernameInput.placeholder = "Facebook email adress"
  passwordInput.value = ''

  document.querySelector('.activeButton')?.classList.remove('activeButton')
  facebookButtonLogin.classList.add('activeButton')

  allInputs.forEach(input => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      errorMessageLogIn.innerText = ''
      errorMessageSignUp.innerText = ''
    }
  })
})
linkedinButtonLogin.addEventListener("click", () => {
  usernameInput.value = ''
  usernameInput.placeholder = "Linked In email adress"
  passwordInput.value = ''

  document.querySelector('.activeButton')?.classList.remove('activeButton')
  linkedinButtonLogin.classList.add('activeButton')

  allInputs.forEach(input => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      errorMessageLogIn.innerText = ''
      errorMessageSignUp.innerText = ''
    }
  })
})
githubButtonLogin.addEventListener("click", () => {
  usernameInput.value = ''
  usernameInput.placeholder = "Github email adress"
  passwordInput.value = ''

  document.querySelector('.activeButton')?.classList.remove('activeButton')
  githubButtonLogin.classList.add('activeButton')

  allInputs.forEach(input => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      errorMessageLogIn.innerText = ''
      errorMessageSignUp.innerText = ''
    }
  })
})
*/