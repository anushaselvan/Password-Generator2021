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

// Function that is invoked when the Generate Password button is clicked
function generatePassword(){
var userChoice1 = window.prompt("Enter the number of characters your password should contain:");

// Returns null when the user enters any number other than 8 to 128
  if ((userChoice1 < 8) || (userChoice1 > 128 ))
  {
    window.alert("Enter a valid number between 8 and 128");
    return null;
  }

// Prompts user to enter choices to create the secure password
var userChoice2 = window.confirm("Click ok to include special characters");
var userChoice3 = window.confirm("Click ok to include numeric characters");
var userChoice4 = window.confirm("Click ok to include uppercase characters");
var userChoice5 = window.confirm("Click ok to include lowercase characters");

// Prompts alert message if user clicks cancel for all the choices
if (!userChoice2 && !userChoice3 && !userChoice4 && !userChoice5){
    window.alert("Must select atleast one character type");
    return null;
  }
  // This code below runs, if the user selects ok for 1 of the prompts and cancel for 3
  else if (userChoice2 && !userChoice3 && !userChoice4 && !userChoice5) {
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

        
  // This code below runs, if the user selects ok for 2 of the prompts and cancel for 2
  else if (userChoice2 && userChoice3 && !userChoice4 && !userChoice5) {
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
  else if (userChoice2 && !userChoice3 && userChoice4 && !userChoice5) {
      var pwd = "";
      var userSelection = specialCharacters.concat(upperCasedCharacters);
          for(i=0; i<userChoice1; i++){
              var index = Math.floor(Math.random() * userSelection.length);
              var yourPassword = userSelection[index];
             pwd = pwd.concat(yourPassword);
          }
      return pwd;
   }
   else if (userChoice2 && !userChoice3 && !userChoice4 && userChoice5) {
      var pwd = "";
      var userSelection = specialCharacters.concat(lowerCasedCharacters);
          for(i=0; i<userChoice1; i++){
                var index = Math.floor(Math.random() * userSelection.length);
                var yourPassword = userSelection[index];
                pwd = pwd.concat(yourPassword);
            }
      return pwd;
    }     
    else if (!userChoice2 && userChoice3 && !userChoice4 && userChoice5) {
      var pwd = "";
      var userSelection = numericCharacters.concat(lowerCasedCharacters);
          for(i=0; i<userChoice1; i++){
                  var index = Math.floor(Math.random() * userSelection.length);
                  var yourPassword = userSelection[index];
                  pwd = pwd.concat(yourPassword);
          }
       return pwd;
     }
     else if (!userChoice2 && userChoice3 && userChoice4 && !userChoice5) {
        var pwd = "";
        var userSelection = numericCharacters.concat(upperCasedCharacters);
            for(i=0; i<userChoice1; i++){
                  var index = Math.floor(Math.random() * userSelection.length);
                  var yourPassword = userSelection[index];
                  pwd = pwd.concat(yourPassword);
          }
        return pwd;
      }
      else if (!userChoice2 && !userChoice3 && userChoice4 && userChoice5) {
          var pwd = "";
          var userSelection = upperCasedCharacters.concat(lowerCasedCharacters);
               for(i=0; i<userChoice1; i++){
                    var index = Math.floor(Math.random() * userSelection.length);
                    var yourPassword = userSelection[index];
                    pwd = pwd.concat(yourPassword);
           }
        return pwd;
      }

// This code below runs, if the user selects ok for 3 of the prompts and cancel for 1
    else if (userChoice2 && userChoice3 && userChoice4 && !userChoice5) {
          var pwd = "";
          var userSelection = specialCharacters.concat(numericCharacters, upperCasedCharacters);
                for(i=0; i<userChoice1; i++){
                  var index = Math.floor(Math.random() * userSelection.length);
                  var yourPassword = userSelection[index];
                  pwd = pwd.concat(yourPassword);
            }
          return pwd;
       }
    else if (userChoice2 && !userChoice3 && userChoice4 && userChoice5) {
          var pwd = "";
          var userSelection = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
                for(i=0; i<userChoice1; i++){
                  var index = Math.floor(Math.random() * userSelection.length);
                  var yourPassword = userSelection[index];
                  pwd = pwd.concat(yourPassword);
            }
      return pwd;
      }  
     else if (userChoice2 && userChoice3 && !userChoice4 && userChoice5) {
          var pwd = "";
          var userSelection = specialCharacters.concat(lowerCasedCharacters, numericCharacters);
              for(i=0; i<userChoice1; i++){
                  var index = Math.floor(Math.random() * userSelection.length);
                  var yourPassword = userSelection[index];
                  pwd = pwd.concat(yourPassword);
              }
      return pwd;
      }  
     else if (!userChoice2 && userChoice3 && userChoice4 && userChoice5) {
          var pwd = "";
          var userSelection = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);
              for(i=0; i<userChoice1; i++){
                  var index = Math.floor(Math.random() * userSelection.length);
                  var yourPassword = userSelection[index];
                  pwd = pwd.concat(yourPassword);
              }
        return pwd;
      }   

  // If the user selects all 4 choices
    else if (userChoice2 && userChoice3 && userChoice4 && userChoice5) {
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

var generateBtn = document.querySelector("#generate");

// Adding event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
