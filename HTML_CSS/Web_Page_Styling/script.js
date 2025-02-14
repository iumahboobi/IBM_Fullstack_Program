function calculateTemperature() {
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("c").value;

    var f = (c * 9 / 5) + 32
    document.getElementById("f").value = f
}


//clacluate weight kg to p
function calculateWeight() {
    var kg = document.getElementById("kg").value;
    var p = kg * 2.2;
    document.getElementById("p").value = p.toFixed(2);
}

function calculateDistance() {

    var km = document.getElementById("km").value;
    var mi = km * 0.62137
    document.getElementById("mi").value = mi.toFixed(2);
}