/*WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/

//Array of special characters to be included in password
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
  '.',
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
  'z',
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
  'Z',
];

function generatePassword(){
var userChoice1 = window.prompt("Enter the number of characters your password should contain:");
if ((userChoice1 < 8) || (userChoice1 > 128 ))
{
window.alert("Enter a valid number");
return null;
}
var userChoice2 = window.confirm("Click ok to confirm using special characters.");
var userChoice3 = window.confirm("Click ok to confirm using numeric characters.");
var userChoice4 = window.confirm("Click ok to confirm using uppercase characters.");
var userChoice5 = window.confirm("Click ok to confirm using lowercase characters.");

if (!userChoice2 && !userChoice3 && !userChoice4 && !userChoice5){
  
  window.alert("Must select atleast one character type");
return null;
}else if (userChoice2 && !userChoice3 && !userChoice4 && !userChoice5) {
var pwd = "";
  for(i=0; i<userChoice1; i++){
    var index = Math.floor(Math.random() * specialCharacters.length);
    var yourPassword = specialCharacters[index];
 pwd = pwd.concat(yourPassword);
  }
 return pwd;
}
else if (!userChoice2 && userChoice3 && !userChoice4 && !userChoice5) {
  var pwd = "";
    for(i=0; i<userChoice1; i++){
      var index = Math.floor(Math.random() * numericCharacters.length);
      var yourPassword = numericCharacters[index];
   pwd = pwd.concat(yourPassword);
    }
   return pwd;
  }
  else if (!userChoice2 && !userChoice3 && userChoice4 && !userChoice5) {
    var pwd = "";
      for(i=0; i<userChoice1; i++){
        var index = Math.floor(Math.random() * upperCasedCharacters.length);
        var yourPassword = upperCasedCharacters[index];
     pwd = pwd.concat(yourPassword);
      }
     return pwd;
    }
    else if (!userChoice2 && !userChoice3 && !userChoice4 && userChoice5) {
      var pwd = "";
        for(i=0; i<userChoice1; i++){
          var index = Math.floor(Math.random() * lowerCasedCharacters.length);
          var yourPassword = lowerCasedCharacters[index];
       pwd = pwd.concat(yourPassword);
        }
       return pwd;
      }
      if (userChoice2 && userChoice3 && !userChoice4 && !userChoice5) {
        var pwd = "";
        var userSelection = specialCharacters.concat(numericCharacters);
          for(i=0; i<userChoice1; i++){
            var index = Math.floor(Math.random() * userSelection.length);
            console.log(index);
           var yourPassword = userSelection[index];
         pwd = pwd.concat(yourPassword);
          }
         return pwd;
        }
        if (userChoice2 && !userChoice3 && userChoice4 && !userChoice5) {
          var pwd = "";
          var userSelection = specialCharacters.concat(upperCasedCharacters);
            for(i=0; i<userChoice1; i++){
              var index = Math.floor(Math.random() * userSelection.length);
             var yourPassword = userSelection[index];
           pwd = pwd.concat(yourPassword);
            }
           return pwd;
          }
          if (!userChoice2 && userChoice3 && userChoice4 && !userChoice5) {
            var pwd = "";
            var userSelection = specialCharacters.concat(lowerCasedCharacters);
              for(i=0; i<userChoice1; i++){
                var index = Math.floor(Math.random() * userSelection.length);
               var yourPassword = userSelection[index];
             pwd = pwd.concat(yourPassword);
              }
             return pwd;
            }
            
            if (!userChoice2 && userChoice3 && !userChoice4 && userChoice5) {
              var pwd = "";
              var userSelection = numericCharacters.concat(lowerCasedCharacters);
                for(i=0; i<userChoice1; i++){
                  var index = Math.floor(Math.random() * userSelection.length);
                 var yourPassword = userSelection[index];
               pwd = pwd.concat(yourPassword);
                }
               return pwd;
              }
              if (!userChoice2 && !userChoice3 && userChoice4 && userChoice5) {
                var pwd = "";
                var userSelection = upperCasedCharacters.concat(lowerCasedCharacters);
                  for(i=0; i<userChoice1; i++){
                    var index = Math.floor(Math.random() * userSelection.length);
                   var yourPassword = userSelection[index];
                 pwd = pwd.concat(yourPassword);
                  }
                 return pwd;
                }
//Userselects 3 choices 
           if (userChoice2 && userChoice3 && userChoice4 && !userChoice5) {
                var pwd = "";
                var userSelection = specialCharacters.concat(numericCharacters, upperCasedCharacters);
                  for(i=0; i<userChoice1; i++){
                    var index = Math.floor(Math.random() * userSelection.length);
                   var yourPassword = userSelection[index];
                 pwd = pwd.concat(yourPassword);
                  }
                 return pwd;
                }
                if (userChoice2 && !userChoice3 && userChoice4 && userChoice5) {
                  var pwd = "";
                  var userSelection = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
                    for(i=0; i<userChoice1; i++){
                      var index = Math.floor(Math.random() * userSelection.length);
                     var yourPassword = userSelection[index];
                   pwd = pwd.concat(yourPassword);
                    }
                   return pwd;
                  }  
                  if (userChoice2 && userChoice3 && !userChoice4 && userChoice5) {
                    var pwd = "";
                    var userSelection = specialCharacters.concat(lowerCasedCharacters, numericCharacters);
                      for(i=0; i<userChoice1; i++){
                        var index = Math.floor(Math.random() * userSelection.length);
                       var yourPassword = userSelection[index];
                     pwd = pwd.concat(yourPassword);
                      }
                     return pwd;
                    }  
                      if (!userChoice2 && userChoice3 && userChoice4 && userChoice5) {
                        var pwd = "";
                        var userSelection = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);
                          for(i=0; i<userChoice1; i++){
                            var index = Math.floor(Math.random() * userSelection.length);
                           var yourPassword = userSelection[index];
                         pwd = pwd.concat(yourPassword);
                          }
                         return pwd;
                        }   
                        if (userChoice2 && userChoice3 && userChoice4 && userChoice5) {
                          var pwd = "";
                          var userSelection = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);
                            for(i=0; i<userChoice1; i++){
                              var index = Math.floor(Math.random() * userSelection.length);
                             var yourPassword = userSelection[index];
                           pwd = pwd.concat(yourPassword);
                            }
                           return pwd;
                          }   

};        
// 
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
