
var computer = document.getElementById('demo');
var you = document.getElementById('demo2');
var button = document.getElementById('press');
var result = document.getElementById('result');

const list = ["rock", "paper", "scissors"];


button.addEventListener('click', func);






function func() {
    var item = list[Math.floor(Math.random() * list.length)];
    you.innerHTML = item;
    var item2 = list[Math.floor(Math.random() * list.length)];
    computer.innerHTML = item2;

    if(item == "scissors" && item2 == "scissors") {
        result.innerHTML = 'its a draw!'
    } else if (item == "rock" && item2 == "rock") {
        result.innerHTML = 'its a draw!'
    } else if (item == "paper" && item2 == "paper") {
        result.innerHTML = 'its a draw!'
    } else if (item == "rock" && item2 == "scissors") {
        result.innerHTML = 'Congrats! You beated the comp up!'
    } else if (item == "scissors" && item2 == "paper") {
        result.innerHTML = 'Congrats! You beated the comp up!'
    } else if (item == "paper" && item2 == "rock") {
        result.innerHTML = 'Congrats! You beated the comp up!'
    } else {
        result.innerHTML = 'Computer beat you up lol!'
    }

}







