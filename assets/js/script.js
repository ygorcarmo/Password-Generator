// Assignment Code
var generateBtn = document.querySelector("#generate");

// Ammount of characters
var characterAmout = function(){
  characterAmoutRange = window.prompt("Enter Number Of Characters:");

// If user enter a value that is less than 8 or greater than 128

if(characterAmoutRange < 8 || characterAmoutRange > 128) {
  window.alert("The character ammount must be greater than 8 and less than 128");   
}
};

var passOptions = function(){
// Include UPPERCASE
var inclueUpperCase = window.confirm("Include Uppercase ?");


// Include Numbers
var includeNumbers = window.confirm("Include Numbers?");

// Include Symbols
var includeSymbols = window.confirm("Include Symbols?");
}
// Prompts when button selected

generateBtn.addEventListener('click', function() {
  characterAmout();
  console.log(characterAmoutRange);
  passOptions();
  console.log(passOptions.includeNumbers);
});


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
