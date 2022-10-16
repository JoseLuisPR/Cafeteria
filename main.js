'use strict'

const grande = document.getElementsByClassName('.grande')
const punto = document.getElementsByClassName('.punto')
var amount = 34.1;
var initial = 0;

function moverDerecha() {
    //document.getElementById("grande").style.transform="translateX(-33%)";
    if (initial>-68.1) {
        initial -= amount;
        console.log("der");
    }

    if (initial==-34.1) {
        document.getElementById("punto1").classList.remove('activo');
        document.getElementById("punto2").classList.add('activo');
        console.log(initial);
    } else if (initial==-68.2) {
        document.getElementById("punto2").classList.remove('activo');
        document.getElementById("punto3").classList.add('activo');
        console.log(initial);
    }
    
    document.getElementById("grande").style.transform = "translateX(" + initial + "%)"
    document.getElementById("grande").style.transition=" all .5s"
}

function moverIzquierda() {

    if (initial<0) {
        initial += amount;
        console.log("izq");
    }

    console.log(initial);

    if (initial==-34.1) {
        document.getElementById("punto3").classList.remove('activo');
        document.getElementById("punto2").classList.add('activo');
    } else if (initial==0) {
        document.getElementById("punto2").classList.remove('activo');
        document.getElementById("punto1").classList.add('activo');
    }

    document.getElementById("grande").style.transform = "translateX(" + initial + "%)"
    document.getElementById("grande").style.transition=" all .5s" 
}