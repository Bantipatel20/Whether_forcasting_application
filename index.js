const { createElement } = require("react");

console.log ("i am a hacker ");

async function showWeather() {
    let city = "goa";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad355578e1a65b64da61732c5bb798ec`);
    const data = await response.json();
    console.log(data)
}

async function fetchWhetherDetail() {
    let lat = 22.6000896
    let lon = 72.8334336
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ad355578e1a65b64da61732c5bb798ec`);
    const data = await response.json();
    console.log(data)
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition);
    }
}
function showposition(position){
    let lat = position.coords.latitude; //22.6000896
    let lon = position.coords.longitude; //72.8334336
    console.log(lat);
    console.log(lon);
}