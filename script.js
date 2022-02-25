
//  create function generatePassword
function generatePassword() {
  console.log("hello! You have clicked the button!");
  
  // the user is prompted to type password according to criteria
  //    -pass length is between 8 and 128
  //    -numeric, uppercase, lowercase, special characters
validateNumber();
return str;

}

function validateNumber() {
   var result = window.prompt("How long do you want your password to be? Note: It must be between 8 and 128 characters!");
   var str = '';
   if (result < 8) {
    window.alert("Password should be greater than 8 characters and no more than 128!");  
  }
 else if (result > 128) {
   window.alert("Password must be no more than 128 characters!");
 }
 else {
  var pass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz1234567890' + '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  for (i = 1; i <= result; i++) {
    var randomstr = Math.ceil((Math.random() * pass.length) + 1);
    str += pass.charAt(randomstr);
   }
}
  // generate password based on the criteria
console.log(str);
  // validate what the user inserts
  // display the unique password on onto page

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log(action);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

