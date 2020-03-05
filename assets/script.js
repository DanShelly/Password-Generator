//Define variables
var specialChar = [ " ","!" ,'"' ,"#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passArr = [];
var count;

//Adds on-click listener to generate button
document.getElementById("generate").addEventListener('click', function(){
    length();
})

//Function to prompt and determine length of the password from the user
function length () {
    count = prompt("How long would you like your password, between 8 and 128 characters?");
    console.log(count);
    if (count > 128) {
        alert("Password must be less than 128 characters.");
        length();
    }
    else if (count < 8) {
        alert("Password must be at least 8 characters.");
        length();
    }
    else {
        character();
    }
}


function character() {
    passArr=[];
    if (confirm("Would you like special characters?")) {
        passArr.push(specialChar);
    }
    if (confirm("Would you like lowercase characters?")) {
        passArr.push(lowerCase);
    }
    if (confirm("Would you like uppercase characters?")) {
        passArr.push(upperCase);
    }
    if (confirm("Would you like number characters?")) {
        passArr.push(nums);
    }
    if (passArr.length < 2) {
        alert("You must select at least two character types.");
        character();
    }
    else {
        generate(passArr, count)
    } 
}

function generate(passArr, length) {
    var password = "";
    console.log('here')
    length = parseInt(length);
    for (let i = 0; i < length; i++) {
        var whichArray = Math.floor(Math.random() * passArr.length);
        password += passArr[whichArray][Math.floor(Math.random() * passArr[whichArray].length)];
        // password += passArr[Math.floor(Math.random() * passArr[whichArray].length)];
    }
    console.log(password)
    document.getElementById("showPass").innerHTML = password;
}

