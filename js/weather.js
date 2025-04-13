function background() {

  const image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg'];
  const imageRandom = image[Math.floor(Math.random() * image.length)];
  document.body.style.backgroundImage = `url('${imageRandom}')`
  
}
background()
setInterval(background, 15000)

const endPoint = 'http://api.weatherapi.com/v1/current.json?key=78afec6aed364854a8c100007251004&q=Sevilla&aqi=no';
const contWeather = document.getElementById("weather");

function getWeather() {
  return fetch(endPoint)
    .then((response) => {
      if(!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
     return response.json();
    });
    
}

function setWeather(){
   getWeather()
.then((data) => {
  contWeather.innerHTML =`
    <h2>${data.location.name}</h2> 
    <div class="logo">
      <img src="https:${data.current.condition.icon}" alt="icon">
      <p>${data.current.temp_c} ºC</p>
    </div>
    <div class="climate">
      <p>Precipitaciones: ${data.current.precip_mm}%</p>
      <p>Viento: ${data.current.wind_kph}Km/h</p>
      <p>Humedad: ${data.current.humidity}%</p> 
    </div>
  `
}).catch((err) => {console.error(err.message)})
}
setWeather()

