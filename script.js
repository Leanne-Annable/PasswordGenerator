// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Array to store character types to include in password
var passwordList = [];
var passwordLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = parseInt(prompt("How long would you like your password to be? (between 10-64 characters): "))
  if (passwordLength < 10 || passwordLength > 64) {
    alert("Please enter a valid password length between 10-64 characters");
    return getPasswordOptions();
  }
  var includeLower = confirm("Would you like to include Lower case letters?: ")
  var includeUpper = confirm("Would you like to include Upper case letters?: ")
  var includeNum = confirm("Would you like to include numbers?: ")
  var includeSpecial = confirm("Would you like to include Special characters?: ")
  if (includeLower === true) {
    passwordList = passwordList.concat(lowerCasedCharacters)
  };
  if (includeUpper === true) {
    passwordList = passwordList.concat(upperCasedCharacters)
  };
  if (passwordList.length === 0) {
    alert("Please select at least one of the character types");
    return getPasswordOptions();
  }
  if (includeNum === true) {
    passwordList = passwordList.concat(numericCharacters)
  };
  if (includeSpecial === true) {
    passwordList = passwordList.concat(specialCharacters)
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input

function generatePassword() {
  let password = "";
  getPasswordOptions()
  for(let i = 0; i < passwordLength; i++) {
    password += getRandom(passwordList);
    }
    return password;    
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  passwordList = []
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);