//Confirm that the user needs a password
var needPassword = confirm("Do you need a password?");
alert("You need a password: " + needPassword);

//Password array
var genPass = [];


//Prompt preferred length of password
if (needPassword) {

    //Need a for loop to keep running this if they continue to select numbers outside the range....right?
    var passLength = prompt("How long would you like the password to be? Must be a minimum of 8 characters or a maximum of 128.");
    if (passLength < 8 || passLength > 128) {
        alert("Password must be between 8 and 128 characters, try again!");
        var passLength = prompt("How long would you like the password to be? Must be a minimum of 8 characters or a maximum of 128.");
    }
    else {
        alert("You'd like your password to be " + passLength + " characters.");
        genPass.push(passLength);
    }

    //Prompt special characters
    var wantSpecChar = confirm("Do you want to use a special character?");
    if (wantSpecChar) {
        var specChar = prompt("What special character would you like to use?"); //How do I get " special character to work? And backslash
        if (specChar === " " || specChar === "!" || specChar === " " || specChar === "#" || specChar === "$" || specChar === "%" || specChar === "&" || specChar === "'" || specChar === "(" || specChar === ")" || specChar === "*" || specChar === "+" || specChar === "," || specChar === "-" || specChar === "." || specChar === "/" || specChar === ":" || specChar === ";" || specChar === "<" || specChar === "=" || specChar === ">" || specChar === "?" || specChar === "@" || specChar === "[" || specChar === " " || specChar === "]" || specChar === "^" || specChar === "_" || specChar === "`" || specChar === "{" || specChar === "|" || specChar === "}" || specChar === "~") {
            genPass.push(specChar);
        }
        else {
            alert("Not a special character, try again!");
            var specChar = prompt("What special character would you like to use?"); //How do I get " special character to work? And backslash
            if (specChar === " " || specChar === "!" || specChar === " " || specChar === "#" || specChar === "$" || specChar === "%" || specChar === "&" || specChar === "'" || specChar === "(" || specChar === ")" || specChar === "*" || specChar === "+" || specChar === "," || specChar === "-" || specChar === "." || specChar === "/" || specChar === ":" || specChar === ";" || specChar === "<" || specChar === "=" || specChar === ">" || specChar === "?" || specChar === "@" || specChar === "[" || specChar === " " || specChar === "]" || specChar === "^" || specChar === "_" || specChar === "`" || specChar === "{" || specChar === "|" || specChar === "}" || specChar === "~") {
                genPass.push(specChar);
            }

        }

    }

    //Prompt numeric characters
    var wantNumChar = confirm("Do you want to use a numeric character?");
    if (wantNumChar) {
        var numChar = prompt("What number do you want to use?");
        if (Number.isInteger(numChar)) {
            genPass.push(numChar);
        }
        else {
            alert("Not a number, try again!");
            var numChar = prompt("What number do you want to use?");
            if (Number.isInteger(numChar)) {
                genPass.push(numChar);
            }
        }


    }

    //Prompt lowercase characters
    var wantLowCase = confirm("Do you want to use a lowercase letter?");
    if (wantLowCase) {
        var lowCase = prompt("What lowercase letter do you want to use?");

    }

    //Prompt uppercase characters
    var wantUpperCase = confirm("Do you want to use a uppercase letter?");
    if (wantUpperCase) {
        var upperCase = prompt("What uppercase letter do you want to use?");

    }

}


//function generate_random_pass {
//