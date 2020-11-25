// Segunda prática da atividade 11 - Java Script ao invés de somar, está colocando os numéros juntos e como centralizar o input

function soma(){
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let h2 = document.createElement("h2");
    let adicao = (parseInt(num1.value) + parseInt(num2.value));
    let calculo = document.createTextNode(`${num1.value} + ${num2.value} = ${adicao}`);
    h2.appendChild(calculo);
    let div = document.querySelector("div");
    div.appendChild(h2);
}

let botaosoma = document.querySelector('#botaosoma');
botaosoma.onclick = soma;

        
function multiplicacao(){
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let h2 = document.createElement("h2");
    let multiplicacao = (num1.value * num2.value);
    let calculo = document.createTextNode(`${num1.value} * ${num2.value} = ${multiplicacao}`);
    h2.appendChild(calculo);
    let div = document.querySelector("div");
    div.appendChild(h2);
}

let botaomult = document.querySelector('#botaomult');
botaomult.onclick = multiplicacao;
        
function divisao(){
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let h2 = document.createElement("h2");
    let divisao = (num1.value / num2.value);
    let calculo = document.createTextNode(`${num1.value} / ${num2.value} = ${divisao}`);
    h2.appendChild(calculo);
    let div = document.querySelector("div");
    div.appendChild(h2);
}

let botaodiv = document.querySelector('#botaodiv');
botaodiv.onclick = divisao;

function subtracao(){
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let h2 = document.createElement("h2");
    let subtracao = (num1.value - num2.value);
    let calculo = document.createTextNode(`${num1.value} - ${num2.value} = ${subtracao}`);
    h2.appendChild(calculo);
    let div = document.querySelector("div");
    div.appendChild(h2);

}            
let botaosub = document.querySelector('#botaosub');
botaosub.onclick = subtracao;