// Assignment Code
var generateBtn = document.querySelector("#generate");
//declare an empty string to push all of the possible string combos to
var passCombo = "";
//create strings for the four variable types
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specChar = "~!@#$%^&*+|\/";
//create an empty string to hold the password length
var passLength = ''

//ask user for a length between 8 and 128 and store the variable
while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
  passLength = prompt ("Please select a number between 8 -128, my friend");

}
alert("You chose " + passLength + " for your password length");

upperCaseInput = confirm("Do you wish to use uppercase characters?")
if (upperCaseInput==true){
  alert("alright, alright, alright")
  passCombo += upperCase;
}

lowerCaseInput = confirm("Do you wish to use lowercase characters?")
if (lowerCaseInput==true){
  alert("tight, tight, tight")
  passCombo += lowerCase;  
}

numbersInput = confirm("Do you wish to use numerical characters?")
if (numbersInput==true){
  alert("dope,dope,dope")
  passCombo += numbers;
}

specCharInput = confirm("Do you wish to use some of those special characters?")
if (specCharInput==true){
  alert("cool, cool, cool")
  passCombo += specChar;
}

console.log(passCombo);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
