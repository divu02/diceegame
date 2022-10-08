// alert("Working");
var randomNum1 = Math.floor(Math.random() * 6)+1; //1-6 

var randomImageSource = "images/dice" + randomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNum2 = Math.floor(Math.random() *6) + 1;
var randomImageSource2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins! Wohoooo";
}
else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! Wohoooo";    
}
else{
    document.querySelector("h1").innerHTML = "OOPsss Draww!";
}