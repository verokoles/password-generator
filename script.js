
//  create function generatePassword

function validatePassword() {
  var result = window.prompt("How long do you want your password to be? Note: It must be between 8 and 128 characters!");
  var str = '';
  if (result < 8) {
    str = "wrong selection";
    window.alert("Password should be greater than 8 characters and no more than 128!");
  }
  else if (result > 128) {
    str = "wrong selection";
    window.alert("Password must be no more than 128 characters!");
  }
  else {
    var pass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz1234567890' + '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    for (i = 1; i <= result; i++) {
      var randomstr = Math.ceil((Math.random() * pass.length) + 1);
      str += pass.charAt(randomstr);
    }
    return str;
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
  var password = validatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

