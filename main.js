let userName = prompt("What is your name?");
let nameConfirm = confirm("Just Checking, is " + userName + " your real name?");
// confirm leads to null or ok 
if (nameConfirm){
    alert("Welcome to my page," + userName + "!");
}
else{
    userName = prompt("Okay, what is your name?")
}

console.log("The user's name is " + userName + ".");