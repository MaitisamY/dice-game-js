let images = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', 
'./images/dice4.png', './images/dice5.png', './images/dice6.png'];
let randomNumberOne = Math.floor(Math.random(5) * 5);
let randomNumberTwo = Math.floor(Math.random(5) * 5);
document.querySelector(".img1").setAttribute("src", images[randomNumberOne]);
document.querySelector(".img2").setAttribute("src", images[randomNumberTwo]);

if (randomNumberOne > randomNumberTwo) {
    document.querySelector('h1').innerHTML = "Player 1 wins";
} else if (randomNumberOne < randomNumberTwo) {
    document.querySelector('h1').innerHTML = "Player 2 wins";
} else {
    document.querySelector('h1').innerHTML = "Draw";
}