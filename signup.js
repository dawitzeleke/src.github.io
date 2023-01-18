
var Email = document.getElementById("Email");
var password = document.getElementById("Password");
const fullname = document.getElementById("Full Name");
var username = document.getElementById("Username");
var Repeatpassword = document.getElementById("Repeat password");
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.getElementById("form_login");
const Error = document.getElementById("error");
form.addEventListener("submit", (e) => {
  let messages = [];
  if (fullname.value === "" || fullname.value == null) {
    messages.push("Full name is required.");
  }
  else if (username.value==='' || username.value==null){
      messages.push('User name is required.')
  }
  else if (Email.value==='' || Email.value==null){
      messages.push('Email is required.')
  }
  else if (!(Email.value.match(pattern))){
      messages.push('Invalid Email Format.')
  }
  else if (password.value==='' || password.value==null){
      messages.push('Password is required.')
  }
  else if (password.value.length < 8){
      messages.push('Password must be longer than 8 characters.')
  }
  else if (password.value.search(/[a-z]/) < 0) {
      messages.push("Password must contain at least one lowercase letter.")
  }
  else if (password.value.search(/[A-Z]/) < 0) {
      messages.push("Password must contain at least one uppercase letter.")
  }

  else if (password.value.search(/[0-9]/) < 0) {
      messages.push("Password must contain at least one number")
  }
  else if (password.value.search(/[ ! # $ % & ‘ * + – / = ? ^ ` . { | } ~ ]/) < 0) {
      messages.push("Password must contain at least one symbol.")
  }
  else if (Repeatpassword.value !== password.value){
      messages.push('Confirm  your password.')
  }
  if (messages.length > 0) {
    e.preventDefault();
    Error.innerHTML = messages.join(`
  `);
  }
});
