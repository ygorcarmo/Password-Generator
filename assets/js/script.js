// Assignment Code
var generateBtn = document.querySelector("#generate");

// Ammount of characters
var characterAmount = function(){
  characterAmountRange = window.prompt("Enter Number Of Characters:");

// If user enter a value that is less than 8 or greater than 128
if(characterAmountRange < 8 || characterAmountRange > 128) {
  window.alert("The character ammount must be greater than 8 and less than 128"); 
  includeUpperCase = false;
  includeNumbers = false;
  includeSymbols = false;  
}
};

// Function with pass options
var passOptions = function(){
// Include UPPERCASE
includeUpperCase = window.confirm("Include Uppercase ?");

// Include Numbers
includeNumbers = window.confirm("Include Numbers?");

// Include Symbols
includeSymbols = window.confirm("Include Symbols?");
};

// Character codes for lowercase which will be default
var LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122);

// Character codes for UPPERCASE
var UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90);

// Character codes for numbers
var NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57);

// Character codes for Symbols
var SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
  arrayFromLowtoHigh(58, 64)).concat(
    arrayFromLowtoHigh(91, 96)).concat(
      arrayFromLowtoHigh(123, 126)
    );


// Code for Prompts when button selected
function generatePassword(){

  characterAmount();
  console.log(characterAmountRange);
  if(characterAmountRange >= 8 && characterAmountRange <= 128){
    passOptions();
  }
  // if(!includeNumbers && !includeSymbols && !includeUpperCase){
  //   window.alert("Password needs at least one of the options(Uppercase, Number or Symbol)");
  //   passwordCharacters = ["Try Again!"]
  // }

  // Generating pass
  var charCodes = LOWERCASE_CHAR_CODES;

// If include upper is true = add
  if(includeUpperCase){
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  }

  // If include number is true = add
  if(includeNumbers){
    charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  }

  // If include symbol is true = add
  if(includeSymbols){
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  }

  var passwordCharacters = []
  // loop to get pass
  for(var i = 0; i < characterAmountRange; i++){
    // code to get random characters
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  };
  
  // If options not selected error = try again
  if(!includeNumbers && !includeSymbols && !includeUpperCase){
    window.alert("Password needs at least one of the options(Uppercase, Number or Symbol)");
    passwordCharacters = ["Try Again!"]
  }

  return passwordCharacters.join('');
  
  
  
};

// Array that will go through letters/numbers/symbols
function arrayFromLowtoHigh(low, high){
  var array= []
  // for loop that will go through the numbers
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
