const cityName = document.querySelector('.inputText');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    getData(cityName.value);
});

function getData(cityName) {
    const api = "9a2dbe8a3d62abfe161914844aebbbc9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`;
    fetch(url).then(res => res.json())
        .then((data) => {
            const { name, sys: { country }, main: { temp, feels_like }, weather: [{ main }] } = data;
            console.log(name, country, temp, feels_like, main);
            const city = document.querySelector('#sehir');
            const tempature = document.querySelector('#sicaklik');
            const weatherDesc = document.querySelector('#havadurumu');
            const feel = document.querySelector('#hissedilen');
            city.textContent = `${name}, ${country}`;
            weatherDesc.textContent = `${main}`;
            tempature.textContent = `${parseInt(temp - 273.15)}`;
            feel.textContent = `${parseInt(feels_like - 273.15)}`;


        })
        .catch(err => console.error(err))

}