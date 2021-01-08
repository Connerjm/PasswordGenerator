// Declaring the variables.

var passwordBox = document.getElementById("password");
var modal = document.getElementById("modal");
var generateBtn = document.getElementById("generate");
var copyBtn = document.getElementById("copy");

var length = document.getElementById("length");
var lowerCase = document.getElementById("lowercase");
var upperCase = document.getElementById("uppercase");
var numeric = document.getElementById("numeric");
var special = document.getElementById("special");

var cancel = document.getElementById("cancel");
var submit = document.getElementById("submit");

//Declaring arrays of different character types.

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var spec = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~"];

// Declaring funtions.

// Close the popup.
function close()
{
  modal.style.display = "none";
}

// Sets all the options in the popup to default.
function reset()
{
  close();
  length.value = 68;
  lowerCase.checked = false;
  upperCase.checked = false;
  numeric.checked = false;
  special.checked = false;
}

// Returns a character of the given array.
function getChar(array)
{
  return array[Math.floor(Math.random()*array.length)];
}

// Construct the actual password.
function buildPassword()
{
  // Empty initial password.
  var thepassword = "";
  var chance;

  // If none of the boxes are checked.
  if (!lowerCase.checked && !upperCase.checked && !numeric.checked && !special.checked)
  {
    alert("You Didn't Select Any Options.");
  }
  else
  {
    //Else go and get a character to match the chosen length.
    for (var i = 0; i < length.value; i++)
    { // Could use nested switch statements or if statements to put the chances inside the toggle check or vise versa.
      chance = Math.random(); //I use a random() to also give the different types of characters different chances of showing up.
      if (chance < 0.5 && lowerCase.checked)
        thepassword += getChar(lower);
      else if (chance < 0.7 && upperCase.checked)
        thepassword += getChar(upper);
      else if (chance < 0.9 && numeric.checked)
        thepassword += getChar(num);
      else if (special.checked)
        thepassword += getChar(spec);
      else
        i--; // If the loop made it all the way here, just try again.
    }
  }

  return thepassword;
}

// Generate and then write the password in the box.
function generatePassword()
{
  passwordBox.value = buildPassword();
  reset();
}

// Nifty function to copy the new password to the clipboard for pasting and using.


// Attaching functions to listeners.

cancel.onclick = reset;
submit.onclick = generatePassword;

copyBtn.onclick = function ()
{
  navigator.clipboard.writeText(passwordBox.value);
}

// Open the popup when the button is clicked.
generateBtn.onclick = function ()
{
  modal.style.display = "block";
}

// Closes the popup if anything other that the popup is clicked.
window.onclick = function (event)
{
  if (event.target == modal)
  {
    close();
  }
}