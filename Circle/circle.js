




var circum = document.getElementById('circum');
var surface = document.getElementById('surface');
button1 = document.getElementById('press1');
button2 = document.getElementById('press2');


button1.addEventListener('click', func);
button2.addEventListener('click', func_s);

function func() {
    var r = document.getElementById('r').value;
    const pi = 3.14;
    var c = 2 * r * pi;
    circum.innerHTML = c;
}

function func_s() {
    var r = document.getElementById('r').value;
    const pi = 3.14;
    var a = pi * r * r;
    surface.innerHTML = a;
}
