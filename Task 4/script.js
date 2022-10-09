/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

start(ENDPOINT)


function start(carsData) {
    fetch(carsData)
    .then (res => res.json())
    .then (data => {
        console.log(data);
        for (i=0; i<data.length; i++){
            create(data[i])
        }
    })
}

function create(data) {
    let output = document.getElementById('output')

    output.style.width = '100%'

    let card = document.createElement('div')

    card.style.maxWidth = '80%'
    card.style.margin = '10px auto'
    card.style.border = '1px solid'
    card.style.borderRadius = '5px'
    card.style.backgroundColor = 'antiquewhite'
    card.style.padding = '5px'

    let brand = document.createElement('div')

    brand.style.fontSize = '30px'

    brand.innerText = 'Brand : ' + data.brand + "\n Models:"

    card.appendChild(brand)
    for (b=0; b < data.models.length;b++){
        let model = document.createElement('div')

        model.innerText = data.models[b]
        model.style.fontSize = '20px'
        
        card.appendChild(model)
    }

    output.appendChild(card)
}