// ------Animation----------

const switchLoginButton = document.querySelector("#signIn");  // select ID signIn
const switchSignupButton = document.querySelector("#signUp");
const loginForm = document.getElementById("logInForm");      // select class logInForm
const signupForm = document.getElementById("signUpForm");

switchLoginButton.addEventListener("click", () => {
  signupForm.style.left = "150%";
  signupForm.style.opacity = "0";
  loginForm.style.left = "50%";
  loginForm.style.opacity = "1";

})

switchSignupButton.addEventListener("click", () => {
  signupForm.style.left = "50%";
  signupForm.style.opacity = "1";
  loginForm.style.left = "-50%";
  loginForm.style.opacity = "0";
})  

/*
switchLoginButton.addEventListener("click", switchToLogIn);

function switchToLogIn() {
  signupForm.classList.add("moveRightOut");
  loginForm.classList.add("moveLeftIn");

  signupForm.style.left = 50%;
  loginForm.style.left = -50%;
}

 switchSignupButton.addEventListener("click", switchToSignUp);

function switchToSignUp() {
  signupForm.classList.add("moveRightIn");
  loginForm.classList.add("moveLeftOut");

  signupForm.style.left = 50%;
  loginForm.style.left = -50%;
}
*/

// -----Variable Animation of Sign Up Page -----
/*
switchSignupButton.addEventListener("click", switchToSignUp);
  function switchToSignUp() {
    let wrapperWidth = document.getElementById("wrapperID").offsetWidth;
    let signupFormPosLeft = signupForm.getBoundingClientRect().left;
    console.log(signupFormPosLeft);
    console.log(document.getElementById("signUpForm").style.left);
    console.log(wrapperWidth);
    signupForm.style.left = signupForm.style.left/2 + wrapperWidth/5 + 'px';
    console.log(signupForm.style.left);
      
      
  }
      */