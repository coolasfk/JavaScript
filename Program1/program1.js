

var bigger = document.getElementById('demo');
var button = document.getElementById("press");



button.addEventListener('click', func);

function func() { 
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var calc = 9;
    if (number1 > number2) {
        calc = number1;
    } else {
        calc = number2;
    }




    bigger.innerHTML = calc;
}


