
let letters =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let uppercaseEl = document.getElementById("uppercase");
let lowercaseEl = document.getElementById("lowercase");
let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols");

let password1El = document.getElementById("password-1");
let password2El = document.getElementById("password-2");
let lengthEl = document.getElementById("length");

let validToCopy = true;

password1El.style.color = "white";
password2El.style.color = "white";

password1El.style.fontStyle = "normal";
password2El.style.fontStyle = "normal";

function generatePasswords() {
    
    let pass1 = "";
    let pass2 = "";
    let length = lengthEl.value;

    if (length > 6 && length < 31) {
        let finalCharacters = [];


        finalCharacters = finalCharacters.concat(letters);
        
        if (symbolsEl.checked) {
            finalCharacters = finalCharacters.concat(symbols);
        } 
        
        if (numbersEl.checked) {
            finalCharacters = finalCharacters.concat(numbers);
        }
        
        for ( let i = 0; i < length; i++) {
            pass1 += finalCharacters [Math.floor (Math.random() * finalCharacters.length)];
            pass2 += finalCharacters [Math.floor (Math.random() * finalCharacters.length)];
        } 
        
        password1El.textContent = pass1;
        password2El.textContent = pass2;
        validToCopy = true;
        
        password1El.style.color = "white";
        password2El.style.color = "white";

        password1El.style.fontStyle = "normal";
        password2El.style.fontStyle = "normal";
 
        password1El.style.fontSize = "18px";
        password2El.style.fontSize = "18px";
    
    } else if (length < 6) {
        password1El.textContent = "Minimum of 6 characters";
        password2El.textContent = "Minimum of 6 characters";
        validToCopy = false;

        password1El.style.color = "red";
        password2El.style.color = "red";

        password1El.style.fontStyle = "italic";
        password2El.style.fontStyle = "italic";
 
        password1El.style.fontSize = "14px";
        password2El.style.fontSize = "14px";
        
    } else {
        password1El.textContent = "Maximum of 30 characters";
        password2El.textContent = "Maximum of 30 characters";
        validToCopy = false;

        password1El.style.color = "red";
        password2El.style.color = "red";

        password1El.style.fontStyle = "italic";
        password2El.style.fontStyle = "italic";
 
        password1El.style.fontSize = "14px";
        password2El.style.fontSize = "14px";

    } 
}


function copyPass1() {
    if (password1El.textContent && validToCopy) {
        navigator.clipboard.writeText(password1El.textContent);
        alert("Copied text: " + password1El.textContent);
    } 
}
    
function copyPass2() {
    if (password2El.textContent && validToCopy) {
        navigator.clipboard.writeText(password2El.textContent);
        alert("Copied text: " + password2El.textContent);
    }
}
