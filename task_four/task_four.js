const cityName = document.getElementById('city-name');
const wind = document.getElementById('temperture')
const btn = document.getElementById('getWeather')

const inputData = document.getElementById("input-data")


btn.addEventListener('click', () =>{
    const area = inputData.value
    console.log(area, 'fire area here');
    if(area) {
    getWeather(area);
    }
});


async function getWeather(area){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${area}&APPID=58f8064cf0a56d8d19adc5000ee15e44`)
        let data = await  response.json();
        console.log(data.name)
        
            wind.textContent = `${data.name}`
    }
    catch{
        console.log('error');
    }
}