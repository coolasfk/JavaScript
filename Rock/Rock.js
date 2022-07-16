
var oponnent = document.getElementById('demo2');
var button = document.getElementById('press1');
var result = document.getElementById('result');

const list = ["rock", "paper", "scissors"];


button.addEventListener('click', func);

function func() {
    var item = document.getElementById('you').value;
    you.innerHTML = item;

 
    if (item !== 'paper' && item !== 'scissors' && item !== 'rock'){
        result.innerHTML = "wrong input";
        result.style.color = "magenta";
        return false;
    } 

  
    var item2 = list[(Math.random() * list.length)];
    oponnent.innerHTML = item2;

    if(item == "scissors" && item2 == "scissors") {
        result.innerHTML = 'Try again!'
        result.style.color = "white";
    } else if (item == "rock" && item2 == "rock") {
        result.innerHTML = 'Try again!'
        result.style.color = "white";
    } else if (item == "paper" && item2 == "paper") {
        result.innerHTML = 'Try again!'
        result.style.color = "white";
    } else if (item == "rock" && item2 == "scissors") {
        result.innerHTML = 'Congrats! You WON!'
        result.style.color = "white";
    } else if (item == "scissors" && item2 == "paper") {
        result.innerHTML = 'Congrats! You WON!'
        result.style.color = "white";
    } else if (item == "paper" && item2 == "rock") {
        result.innerHTML = 'Congrats! You WON!'
        result.style.color = "white";
    } else {
        result.innerHTML = 'Computer beat you up, you loser!'
        result.style.color = "white";
    }

}







