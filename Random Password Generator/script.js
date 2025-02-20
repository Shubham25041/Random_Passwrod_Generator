// const passwordBox = document.querySelector("#Password");
// const length = 12;


// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "@#$%^&*()!<>?/:\}]{[";

// const allChars = upperCase + lowerCase + number + symbol;

// function createPassword(){
//     let password = "";

//     password += upperCase[Math.floor(Math.random() * upperCase.length)];
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     password += number[Math.floor(Math.random() * number.length)];
//     password += symbol[Math.floor(Math.random() * symbol.length)];

//     while(length > password.length){
//         password += allChars[Math.floor(Math.random() * allChars.length)];
//     }
//     passwordBox.value = password;
// }

// function copyPassword() {
//     passwordBox.select();
//     navigator.clipboard.writeText(passwordBox.value)
//         .then(() => alert("Password copied!"))
//         .catch(err => console.error("Error copying password:", err));
// }


const passwordBox = document.querySelector("#Password");
const lengthInput = document.querySelector("#passwordLength");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()!<>?/:\}]{[";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let length = parseInt(lengthInput.value) || 12; // Get user input or default to 12
    let password = "";

    if (length < 4) {
        alert("Password length must be at least 4 to include all character types.");
        return;
    }

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => alert("Password copied!"))
        .catch(err => console.error("Error copying password:", err));
}

