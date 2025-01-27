const logInForm = document.getElementById('logInForm');
const signUpForm = document.getElementById('signUpForm');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const usernameSignUp = document.getElementById('usernameSignUp');
const emailInput = document.getElementById('emailInput');
const passwordSignUp = document.getElementById('passwordSignUp');
const repeatInput = document.getElementById('repeatInput');
const errorMessageLogIn = document.getElementById('errorMessageLogIn');
const errorMessageSignUp = document.getElementById('errorMessageSignUp');

signUpForm.addEventListener('submit', (e) => {

  let errors = []

    errors = getSignUpFormErrors(usernameSignUp.value, emailInput.value, passwordSignUp.value, repeatInput.value)

  if(errors.length > 0){
    e.preventDefault()
    errorMessageSignUp.innerText = errors.join(" ")
  }
});

logInForm.addEventListener('submit', (e) => {

  let errors = []

    errors = getLogInFormErrors(usernameInput.value, passwordInput.value)

  if(errors.length > 0){
    e.preventDefault()
    errorMessageLogIn.innerText = errors.join(" ")  //join adds all elements of an array into a string, separated by text within ""
  }
});



function getSignUpFormErrors(username, email, password, repeat) {
  let errors = []

  if(username === '' || username == null){
    errors.push('Username is required.')
    usernameSignUp.parentElement.classList.add('incorrect')
  }
  if(email === ''|| email == null){
    errors.push('Email is required.')
    emailInput.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required.')
    passwordSignUp.parentElement.classList.add('incorrect')
  } 
  if(repeat === '' || repeat == null){
    errors.push('Repeated password is required.')
    repeatInput.parentElement.classList.add('incorrect')
  }
  if(password.length < 8){
    errors.push('Password must contain at least 8 characters.')
    passwordSignUp.parentElement.classList.add('incorrect')
  }
  if(repeat !== password){
    errors.push('Password does not match repeated password.')
    passwordSignUp.parentElement.classList.add('incorrect')
    repeatInput.parentElement.classList.add('incorrect')
  }
  return errors;
}
  
function getLogInFormErrors(username, password) {
  let errors = []
  
  if(username === '' || username == null){
    errors.push('Username is required.')
    usernameInput.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required.')
    passwordInput.parentElement.classList.add('incorrect')
  } 
  return errors;
}

const allInputs = [usernameInput, usernameSignUp, emailInput, passwordInput, passwordSignUp, repeatInput]

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      errorMessageLogIn.innerText = ''
      errorMessageSignUp.innerText = ''
    }
  })
})