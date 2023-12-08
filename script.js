var container = document.querySelector('.container');
var cards = document.querySelector('.cards');
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector("#button3")

var number = 0;

button1.onclick = function(){
    if(number < 6){
        number ++;
    }
    cixar()
}

button2.onclick = function(){
    number = 0;
    cixar();
}

button3.onclick = function(){
    if(number >= 0){
        number --;
        cixar();
    }
    
}

function cixar(){
    var deyer = 0;
    cards.innerHTML = ``;
    while(deyer < number){
        cards.innerHTML += `<div class="card"> You added ${deyer + 1} element`;
        deyer ++;
    }
    console.log(deyer);
}