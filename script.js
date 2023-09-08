const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function day() {
const d = new Date();
let day = weekdays[d.getDay()];
document.getElementById("currentDay").innerHTML = day;
}
day();
function utcTime() {
const date = new Date();
let ms = date.getTime()
document.getElementById('utcTime').innerHTML = ms;
}
  setInterval(utcTime, 1000);