let images = ['dice1.png', 'dice2.png', 'dice3.png', 
'dice4.png', 'dice5.png', 'dice6.png'];
let randomNumberOne = Math.floor(Math.random() * 6);
let randomNumberTwo = Math.floor(Math.random() * 6);
document.querySelector(".img1").setAttribute("src", images[randomNumberOne]);
document.querySelector(".img2").setAttribute("src", images[randomNumberTwo]);

if (randomNumberOne > randomNumberTwo) {
    document.querySelector('h1').innerHTML = "Player 1 wins";
} else if (randomNumberOne < randomNumberTwo) {
    document.querySelector('h1').innerHTML = "Player 2 wins";
} else {
    document.querySelector('h1').innerHTML = "Draw";
}
