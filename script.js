

//Conectamos la API para el intecambio de monedas.

const GetDataFromApi = async () =>{
const currency = await fetch ("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json");
const dataFromApi = await currency.json();
console.log(dataFromApi);

}

GetDataFromApi();

//Una vez vinculada la API de divisas, creo el botón selector que permitirá cambiar de divisa.
const basicPrice = document.getElementById ("basicPrice")
const professionalPrice = document.getElementById ("professionalPrice")
const premiumPrice = document.getElementById ("premiumPrice")
const priceCard = document.getElementById("price")
const buttonCard = document.createElement("select")
const options = [
    { value: 'USD', text: 'USD'},
    { value: 'EUR', text: 'EUR'},
    { value: 'GBP', text: 'GBP'}
];
//Busco las opciones que tiene el selector de divisas.
options.forEach(optionData => {
    const option = document.createElement("option")
    option.value = optionData.value;
    option.textContent = optionData.text;
    buttonCard.appendChild(option);
});

//Doy funcionalidad al selector.
buttonCard.addEventListener("change", (event) => {


    
    let tipo = buttonCard.value
    if(buttonCard.value === 'EUR'){
        basicPrice.innerText="hola"
        professionalPrice.innerText = "hola"
        premiumPrice.innerText = "hola"
    } else if (buttonCard.value === 'GBP'){
        basicPrice.innerText="ADIOS"
        professionalPrice.innerText = "ADIOS"
        premiumPrice.innerText = "ADIOS"
    }
 console.log(tipo)

})

//Debajo de este código voy a ir colocando el HTML.
priceCard.appendChild(buttonCard)

