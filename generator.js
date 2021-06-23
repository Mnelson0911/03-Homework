// Assignment Code

var lwrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symb = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

function generatePassword(){

//choosing what characters are wanted in the password
    var charPick = [];
    var lowYN = confirm("Obviously you want lowercase letters?");
    var upYN = confirm("Do you wanna use some CAPS in that password?");
    var numbYN = confirm("How about some numbers?");
    var symbYN = confirm("Last but not least, how about we throw some symbols in that super secure password?");
    
//Need so it runs all of the confirms (this took me the longest to figure out...)
    if ((upYN===false) && (lowYN===false) && (symbYN===false) && (numbYN===false)) {
      alert ("Come on you gotta pick at least one...");
      reload();
      }
    
 //Lets the user set the length that they want their password to be     
      var lengthPW = prompt ("How many characters long would you like your new password? Remember it has to be between 8 & 128!");
      if ((lengthPW < 8) || (lengthPW > 128)){
        alert("I said between 8 and 128 ya dingus");
        lengthPW = prompt("Choose Length");
      } 
    
    
    if (upYN) {
      for(var i = 0; i < uprCase.length; i++ ){
        charPick.push(uprCase[i]);
      }
    }
    if(lowYN){
      for(var i=0; i < lwrCase.length; i++){
        charPick.push(lwrCase[i]);
      }
    }
    if(symbYN){
      for(var i=0; i < symb.length; i++){
        charPick.push(symb[i]);
      }
    }
    if(numbYN){
      for(var i=0; i < numb.length; i++){
        charPick.push(numb[i]);
      }
    }

    var finalPW = [];
    for(i=0; i < lengthPW; i++){
      finalPW.push(charPick[Math.floor(Math.random()* charPick.length)]);
    }

    return(finalPW.join(""));
    }
    
    //starter code
    var generateBtn = document.querySelector("#generate");
    
    // Write password to the #password input
    //starter code
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);