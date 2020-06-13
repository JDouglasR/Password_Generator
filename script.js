// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var choices = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    specialCharacters: "!@#$%^&*()"
  }

  var passwordLength = prompt("How long would you like your password to be?  Password must be between 8 and 128 characters.");
  var chooseUpper = confirm("Do you want to use UPPERCASE letters in your password?");
  var chooseLower = confirm("Do you want to use LOWERCASE letters in your password?");
  var chooseNumbers = confirm("Do you want to use NUMBERS in your password?");
  var chooseCharacters = confirm("Do you want to use SPECIAL CHARACTERS --!@#$%^&*()-- in your password?");
  var acceptedChoices = "";

  if (passwordLength >= 8 && passwordLength <= 128) {
    
    if (chooseUpper) {
      acceptedChoices += choices.upperCase;
    }
    
    if (chooseLower) {
      acceptedChoices += choices.lowerCase;
    }

    if (chooseNumbers) {
      acceptedChoices += choices.numbers;
    }

    if (chooseCharacters) {
      acceptedChoices += choices.specialCharacters;
    }

    for (var i = 0; i < passwordLength; i++) {
      password += acceptedChoices.charAt(Math.floor(Math.random() * Math.floor(acceptedChoices.length -1)));
    } 

    console.log(password);
    return password;
  
  }else {
      return password = "Something went wrong!  Did you use the correct amount of characters?";
    }
}

function writePassword() {
  var password = generatePassword();
  password = password.replace("[object HTMLTextAreaElement]", "");
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

function outputClear() {
  password = password.replace(password, "");
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);