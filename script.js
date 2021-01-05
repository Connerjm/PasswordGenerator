// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword()
// {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Declaring the variables.

var modal = document.getElementById("modal");
var generateBtn = document.getElementById("generate");

var length = document.getElementById("length");
var lowerCase = document.getElementById("lowercase");
var upperCase = document.getElementById("uppercase");
var numeric = document.getElementById("numeric");
var special = document.getElementById("special");

var cancel = document.getElementById("cancel");
var submit = document.getElementById("submit");

// Declaring funtions.

// Close the popup.
function close()
{
  modal.style.display = "none";
}

function generatePassword()
{
  close();
  //TODO
}

// Attaching functions to listeners.

cancel.onclick = close;
submit.onclick = generatePassword;

// Open the popup when the button is clicked.
generateBtn.onclick = function ()
{
  modal.style.display = "block";
}

// Closes the popup if anything other that the popup is clicked.
window.onclick = function (event) {
  if (event.target == modal) {
    close();
  }
}