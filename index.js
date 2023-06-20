var randomNumber1 = Math.floor(Math.random() * 6) + 1; //dice1.png - dice6.png
var ramdomDiceimage = "dice" + randomNumber1 + ".png"; //images/dice1.jpg
var randomImageSource = "images/" + ramdomDiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //dice1.png - dice6.png
var ramdomDiceimage = "dice" + randomNumber2 + ".png"; //images/dice1.jpg
var randomImageSource = "images/" + ramdomDiceimage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Win!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText = "Player 2 Win!";
}
else {
    document.querySelector("h1").innerText = "Draw!";
}