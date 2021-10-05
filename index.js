var randomNumber1 = Math.floor(Math.random() * 6 + 1); // Set a random number for player 1(1-6)
var randomNumber2 = Math.floor(Math.random() * 6 + 1); // Set a random number for player 2(1-6)

var randomImageSource1 = "images/" + "dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

var winner;
if(randomNumber1 > randomNumber2) {
  winner = "🏆Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2) {
  winner = "🏆Player 2 Wins!";
}
else {
  winner = "🏴Draw!";
}
document.querySelector("h1").innerHTML = winner;
