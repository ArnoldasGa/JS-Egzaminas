/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */


document.getElementById('btn__element').addEventListener('click', counter)

function counter(){
    value = Number(document.getElementById('btn__state').innerText)
    document.getElementById('btn__state').innerText = value+1
}