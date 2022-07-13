

var bigger = document.getElementById('demo');
var button = document.getElementById("press");



button.addEventListener('click', func);

function func() { 
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    

    if (number1 > number2) {
        number1 = bigger
    } else {
        number2 = bigger
    }

    bigger.innerHTML = bigger;
}
