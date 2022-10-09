/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


document.getElementById('btn').addEventListener('click',showUsers)

function showUsers() {
    start(ENDPOINT)
}

function start(FetchData) {
    document.getElementById('message').innerHTML = ''
    fetch(FetchData)
    .then (res => res.json())
    .then (data => {
        for (i=0; i < data.length;i++){
            add(data[i])
        }
    })
}

function add (data) {
    let output = document.getElementById('output')

    let card = document.createElement('div')

    card.style.display = 'flex'
    card.style.gap = '10px'
    card.style.margin = '10px 0px'

    let login = document.createElement('div')

    login.innerText = data.login

    let url = document.createElement('div')

    url.innerText = data.avatar_url

    card.appendChild(login)
    card.appendChild(url)
    output.appendChild(card)
}