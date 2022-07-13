

var diagonal = document.getElementById('demo');
var button = document.getElementById("press");



button.addEventListener('click', func);

function func() { 
    var number = document.getElementById("side").value;
    a = (number*number)+(number*number);
    b = Math.sqrt(a);
    diagonal.innerHTML = b;
}
