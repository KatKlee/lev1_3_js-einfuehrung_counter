let output = document.getElementById('output')
let ergebnis = 0
output.innerHTML = ergebnis

function addition(zahl) {
    ergebnis += zahl
    output.innerHTML = ergebnis
}

function subtraction(zahl) {
    ergebnis -= zahl
    output.innerHTML = ergebnis
}

function multiplication(zahl) {
    ergebnis = ergebnis * zahl
    output.innerHTML = ergebnis
}

function backToNull() {
    ergebnis = 0
    output.innerHTML = ergebnis
}