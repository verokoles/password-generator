

//  create function to validate Password
function validatePassword() {
  var result = window.prompt("How long do you want your password to be? Note: It must be between 8 and 128 characters!");
  var str = '';
  // if user types in any number less than 8 they get an alert to choose between 8 and 128
  if (result < 8) {
    str = "wrong selection";
    window.alert("Password should be greater than 8 characters and no more than 128!");
  }
  // if user types in any number more than 128 they get an alert to type a number
  // less no greater than 128
  else if (result > 128) {
    str = "wrong selection";
    window.alert("Password must be no more than 128 characters!");

    //next few pop-ups prompt user to choose whether they want or don't want
    // uppercase, lowercase, numbers, and/or special characters
  } else {
    askUpperCase = confirm("Do you want to use uppercase letters?");
    askLowerCase = confirm("Do you want to use lowercase letters?");
    askNumeric = confirm("Do you want to use numbers?");
    askSpecialChar = confirm("Do you want to use special characters?");
  };

  var pass = ''; //initialize the values
  const strUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const strLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const strNumeric = '1234567890';
  const strSpecialChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

  if (askUpperCase) {
    pass += strUpperCase;
  }
  if (askLowerCase) {
    pass += strLowerCase;
  }
  if (askNumeric) {
    pass += strNumeric;
  }
  if (askSpecialChar) {
    pass += strSpecialChar;
  }
  // combinations of chosen criteria 
  if (askUpperCase && askLowerCase && askNumeric && askSpecialChar) { //all prompts clicked 'OK'
    pass += strLowerCase + strUpperCase + strNumeric + strSpecialChar;
  }

  if (askUpperCase && askLowerCase) { // first two prompts 'OK'
    pass += strUpperCase + strLowerCase;
  }
  if (askUpperCase && askLowerCase && askNumeric) { // first three prompts 'OK'
    pass += strUpperCase + strLowerCase + askNumeric;
  }
  if (askUpperCase && askNumeric) { // first and third prompt 'OK'
    pass += strUpperCase + strNumeric;
  }
  if (askUpperCase && askSpecialChar) { //first and last prompt 'OK'
    pass += strUpperCase + strSpecialChar;
  }
  if (askLowerCase && askNumeric && askSpecialChar) {
    pass += strLowerCase + strNumeric + strSpecialChar;
  }
  if (askLowerCase && askNumeric) {
    pass += strLowerCase + strNumeric;
  }
  if (askLowerCase && askSpecialChar) {
    pass += strLowerCase + strSpecialChar
  }
  if (askNumeric && askSpecialChar) {
    pass += strLowerCase + strSpecialChar;
  }
  if (!askUpperCase && !askLowerCase && !askNumeric && !askSpecialChar) {
      window.alert("No password conditions met! Restart your session.");

  }


  for (i = 1; i <= result; i++) {
    var randomstr = Math.ceil((Math.random() * pass.length) + 1);
    str += pass.charAt(randomstr);
  }
  console.log('Password: ', str);
  return str;
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

