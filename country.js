let urlParams = new URLSearchParams(window.location.search);
let countryName = urlParams.get('name');


const countryNamesInRussian = {
    Georgia: "Грузия",
    Cyprus: "Кипр",
    Bulgaria: "Болгария",
    Greece: "Греция"
};

async function getCountryData(country) {
    let response = await fetch('https://restcountries.com/v3.1/name/' + country);
    let data = await response.json();
    let countryData = data[0];

    
    let countryNameInRussian = countryNamesInRussian[countryData.name.common] || countryData.name.common;

    document.getElementById('country-name').textContent = countryNameInRussian;
    document.getElementById('country-flag').src = countryData.flags.png;
    document.getElementById('country-details').innerHTML = `
        <p>Континент: ${countryData.region}</p>
        <p>Население: ${countryData.population.toLocaleString()}</p>
        <p>Столица: ${countryData.capital}</p>
        <p>Языки: ${Object.values(countryData.languages).join(', ')}</p>
        <p>Текст про эту страну: <br> Эта страна известна своим уникальным культурным наследием, потрясающей природой и гостеприимством. </p>
    `;
}

getCountryData(countryName);
