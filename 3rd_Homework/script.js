// Assignment Code
var generateBtn = document.querySelector("#generate");

var resetBtn = document.querySelector("#reset");
//declare an empty string to push all of the possible string combos to
var passCombo = "";
//create strings for the four variable types
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specChar = "~!@#$%^&*+|\/";
//create an empty string to hold the password length
// var passLength = "";
// var password = "";

function generatePassword(){
  var passLength = "";
  var password = "";
//ask user for a length between 8 and 128 that is a number and store the variable
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt ("Please select a number between 8 -128, my friend!");

  }
  alert("You chose " + passLength + " for your password length");
//ask user which character sets they'd like to use.

// while (upperCaseInput !== true && lowerCaseInput !== true && numbersInput !== true && specCharInput !== true ) 
  upperCaseInput = confirm("Do you wish to use uppercase characters?")
  if (upperCaseInput==true){
    alert("Alright, Alright, Alright!")
    passCombo += upperCase;
  } else {alert("No uppercase letters for you!")}

  lowerCaseInput = confirm("Do you wish to use lowercase characters?")
  if (lowerCaseInput==true){
    alert("Tight, Tight, Tight!")
    passCombo += lowerCase;  
  } else {alert("No special lowercase letters for you!")}

  numbersInput = confirm("Do you wish to use numerical characters?")
  if (numbersInput==true){
    alert("Word, Word, Word!")
    passCombo += numbers;
  } else {alert("No numbers for you!")}

  specCharInput = confirm("Do you wish to use some of those special characters?")
  if (specCharInput==true){
    alert("Cool, Cool, Cool!")
    passCombo += specChar;
  } else {alert("No special characters for you!")}
//validation to make sure the user choses atleast one character set
  if (passCombo === "") {
    alert("Tsk, tsk, you must chose atleast one character set!  Please hit the Reset Password button.");
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

function resetPage() {
  location.reload();
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

resetBtn.addEventListener("click",resetPage );

