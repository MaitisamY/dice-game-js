document.getElementById('player1').classList.add('hidden');
document.getElementById('player2').classList.add('hidden');

function btnAction() {
    document.getElementById('btn').click();
}

function diceGame() {
    let images = ['dice1.png', 'dice2.png', 'dice3.png', 
    'dice4.png', 'dice5.png', 'dice6.png'];

    let randomNumberOne = Math.floor(Math.random() * 6);
    let randomNumberTwo = Math.floor(Math.random() * 6);

    document.querySelector(".img1").setAttribute("src", images[randomNumberOne]);
    document.querySelector(".img2").setAttribute("src", images[randomNumberTwo]);


    if(document.querySelector('#btn').innerHTML == 'Start'){
        document.querySelector('#btn').innerHTML = 'Roll';
        document.getElementById('player1').classList.remove('hidden');
        document.getElementById('player2').classList.remove('hidden');
    }

    if (randomNumberOne > randomNumberTwo) {
        document.querySelector('h1').innerHTML = "Player 1 wins";
    } else if (randomNumberOne < randomNumberTwo) {
        document.querySelector('h1').innerHTML = "Player 2 wins";
    } else {
        document.querySelector('h1').innerHTML = "Draw";
    }
}

