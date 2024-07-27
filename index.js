const apikey = "c38b2ebf4e734d2488112508242407";
const form = document.querySelector("form");
const input = document.querySelector("input");
const temp = document.querySelector(".temperature");
const city = document.querySelector(".city");
const weather_img = document.querySelector(".weather-img");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");

let inputData = "";


async function getTemperature(){
    let inputData = input.value;
    const url = `http://api.weatherapi.com/v1/current.json?q=${inputData}&Key=${apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let temperature = data.current;
    let location = data.location;
    temp.innerText = temperature.temp_c;
    city.innerText = location.name;
    weather_img.setAttribute("src",temperature.condition.icon);
    humidity.innerText = temperature.humidity;
    wind_speed.innerText = temperature.wind_kph

}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    getTemperature();
})