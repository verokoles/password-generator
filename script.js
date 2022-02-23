// create function generatePassword
function generatePassword() {
  var str = ""
  var pass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz1234567890' + '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
  for (i = 0; i == 8; i++) {
    var randomstr = Math.ceil(Math.random() * pass.length + 1);
    str += pass.charAt(randomstr);
    console.log(str)
    return str
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

