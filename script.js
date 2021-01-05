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

// Close the popup.
function close()
{
  modal.style.display = "none";
}

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