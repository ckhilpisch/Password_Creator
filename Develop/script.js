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
var passLength = "";
var password = "";

function generatePassword(){
//ask user for a length between 8 and 128 that is a number and store the variable
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt ("Please select a number between 8 -128, my friend!");

  }
  alert("You chose " + passLength + " for your password length");
//ask user which character sets they'd like to use.

// while (upperCaseInput !== true && lowerCaseInput !== true && numbersInput !== true && specCharInput !== true ) 
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
//validation to make sure the user choses atleast one character set
  if (passCombo === "") {
    alert("Tsk, tsk, you must chose atleast one character set!  Let's start at the beginning");
  }
  // while (upperCaseInput !== true && lowerCaseInput !== true && numbersInput !== true && specCharInput !== true ) 
  // console.log(passCombo);
//help generate a random password, the desired length, with the character sets chosen
  for (var i=0; i <passLength; i++) {
    password += passCombo.charAt (Math.floor(Math.random()*passCombo.length))
  }
  return password;
}

console.log(password);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

