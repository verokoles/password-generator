# Password Generator
## Purpose:
 * To create an application with JavaScript that contains a random password generator. 

  ## Table of Contents:
1. [ Description ](#desc)
2. [ Built With ](#built-with)
3. [ Steps ](#steps)
4. [ Link to my page ](#link-to-my-page)
5. [ Helpful Links ](#help)

<a name="desc"></a>
## 1. Description
 * Any user can utilize this application to create their own unique, random passcode that meets certain criteria.
 * It will run in the browser.
 * When asked to enter a password length, the user types in the length number.
 * Other windows pop up prompting the user to choose whether or not to include uppercase, lowercase, numbers, and/or special characters.
 * Based on their response, the generator calculates and presents a random password meeting the criteria chosen.

<a name="built-with"></a>
## 2. Built With
 * CSS
 * HTML
 * JavsScript

<a name="steps"></a>
 ## 3. Steps

  ![Application With the Math.random Portion and NO Criteria](assets/screenshots/password-no-criteria.png)

  ![App In Browser Starting Prompt](assets/screenshots/start-prompt-how-many.png)
   The user begins by clicking on the 'Generate Password' button. Automatically a window prompts them to choose how many characters they want their password to be.

  ![If a number less than 8 is chosen](assets/screenshots/low-number-choice-alert.png)

  ![If a number greater than 128 is chosen](assets\screenshots/high-number-choice-alert.png)

  ![Once user chooses a number between 8 and 128, a new window asks if they want uppercase](assets/screenshots/uppercase-ask.png)

  ![A new window asks if they want lowercase](assets/screenshots/lowercase-ask.png)

  ![A new window asks if they want numbers](assets/screenshots/numbers-ask.png)

  ![A new window asks if they want special characters](assets/screenshots/special-char-ask.png)

  ![]()
  ![]()
  ![]()
  ![]()

 An issue that would/t allow the code to run was the incorrect placement of the _____ outside of the 'for' loop. Variables created within the curly braces of a function only exist within that function's braces. Any reference to it outside of the function will cause the program to break because it can't find a variable with that name. being outside of the 'for' loop kept only drawing random groups of two, one, and zero characters. Once I placed them inside of the 'for' loop

<a name="link-to-my-page"></a>
 ## 4. Link To Project in My Github Pages:[ My Password Generator]()

 ## 5. Helpful Links
  * [MDN Web Docs on JS:](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [Help on geeksforgeeks](https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/)
  * [CharAt String on W3 Schools](https://www.w3schools.blog/charat-string-javascript)
  * [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)
  * []()
  * []()
  * []()
  * []()
 

