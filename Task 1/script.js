/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let submit = document.getElementById('submit-btn').addEventListener('click', calculate)

function calculate() {
    document.getElementById('output').innerHTML = ''
    let kg = document.getElementById('search').value
    let lb;
    let g;
    let oz;

    lb = kg * 2.2046
    g = kg / 0.0010000
    oz = kg * 35.274

    IvestiDiv ('kilogramai', kg)
    IvestiDiv ('svarai', lb)
    IvestiDiv ('gramai', g)
    IvestiDiv ('unicijos', oz)

    document.getElementById('search').value = '';
}

function IvestiDiv(name, value) {
    let output = document.getElementById('output')
    let div = document.createElement('div')
    div.innerText = "Gauti " + name + ' = ' + value;
    div.style.margin = '50px auto'
    div.style.maxWidth = '80%'
    div.style.fontSize = '50px'
    output.appendChild(div)
}