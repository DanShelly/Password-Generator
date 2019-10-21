

//Confirm that the user needs a password
var needPassword = confirm("Do you need a password?");
alert("You need a password: " + needPassword);

//Prompt preferred length of password
if (needPassword) {
var passLength = prompt("How long would you like the password to be? Must be a minimum of 8 characters with a maximum of 128.");
    if (passLength < 8) {
        alert("Password must be more than 8 characters, try again!");
        var passLength = prompt("How long would you like the password to be? Must be a minimum of 8 characters with a maximum of 128.");
    }
    else if (passLength > 128) {
        alert("Password must be less than 128 characters, try again!");
        var passLength = prompt("How long would you like the password to be? Must be a minimum of 8 characters with a maximum of 128.");
    }
    else {
        alert("You'd like your password to be " + passLength + " characters.");
    }



    


//Character type prompts
//Prompt if using special characters
//var specChar = prompt("Do you want to use special characters?");
//alert("You'd like your password to be " + passLength + " characters.");

//Prompt if using numeric characters
//var numChar = prompt("Do you want to use numerical characters?");
//alert("You'd like your password to be " + passLength + " characters.");

//Prompt if using lowercase characters
//var lowChar = prompt("Do you want to use lowercase characters?");
//alert("You'd like your password to be " + passLength + " characters.");

//Prompt if using uppercase characters
//var upChar = prompt("Do you want to use uppercase characters?");
//alert("You'd like your password to be " + passLength + " characters.");

//Generated password
//var genPass = 


//if (needPassword) 