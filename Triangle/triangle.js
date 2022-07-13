

var diagonal = document.getElementById('demo');
var button = document.getElementById("press");



button.addEventListener('click', func);

function func() { 
    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var c = document.getElementById("side3").value;
    var s = (a + b + c)/2;
    console.log(s)
    var area = Math.sqrt(s);
    diagonal.innerHTML = area;
}
