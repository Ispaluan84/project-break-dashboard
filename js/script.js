function background() {

const image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg'];
const imageRandom = image[Math.floor(Math.random() * image.length)];
document.body.style.backgroundImage = `url('${imageRandom}')`

}

background()
setInterval(background, 15000)


//Código Reloj
const dateDiv = document.getElementById('date');
const clockDiv = document.getElementById('clock');
const message = document.getElementById('message');

function fecha() {
const currentDate = new Date(); 
const [date, month, year] = [
   
   currentDate.getDate(),
   currentDate.getMonth(),
   currentDate.getFullYear(),
]
const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

const formatter = new Intl.DateTimeFormat('es-ES', options);
dateDiv.innerHTML =  formatter.format(currentDate)
}

fecha();

function hora() {
  const currentClock = new Date();
  const [hours, minutes, seconds] = [
    currentClock.getHours(),
    currentClock.getMinutes(),
    currentClock.getSeconds(),
  ]
  const newOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const  formatearHora = new Intl.DateTimeFormat('es-ES', newOptions);
  clockDiv.innerHTML = formatearHora.format(currentClock)

}

const intervalo = setInterval(hora,1000);

hora();

//Código Estación Meteorológica

const endPoint = 'https://api.weatherapi.com/v1/current.json?key=78afec6aed364854a8c100007251004&q=Sevilla&aqi=no';
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

//Código Enlaces

const title = document.getElementById('title');
const link = document.getElementById('link');
const keep = document.getElementById('keep');
const list = document.getElementById('list');

function listOfLink(){
    keep.addEventListener('click', () => {
        let newTitle = title.value;
        let newLink = link.value;

        if (!newTitle || !newLink) {
            console.error('El título o el enlace están vacíos');
            return
        }

        localStorage.setItem('newTitle', JSON.stringify(newTitle));
        localStorage.setItem('newLink', JSON.stringify(newLink));

        const localTitle = JSON.parse(localStorage.getItem('newTitle'))
        const localLink = JSON.parse(localStorage.getItem('newLink'))
            console.log(localLink, localTitle)

        const li = document.createElement('li');

        let formattedLink = localLink;
        if (localLink && !localLink.startsWith('http://') && !localLink.startsWith('https://')) {
            formattedLink = 'https://' + localLink;
        }
        const a = document.createElement('a');
        a.setAttribute('href', formattedLink);
        a.textContent = localTitle;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X'
        removeBtn.classList.add('remove-btn')
        removeBtn.style.marginleft = '10px'
        removeBtn.addEventListener('click', () => {
            list.removeChild(li);
            localStorage.removeItem('newTitle');
            localStorage.removeItem('newLink');
        })

        li.appendChild(a);
        li.appendChild(removeBtn);
        list.appendChild(li);
    
    })

    
}

listOfLink()


// Código Generador Contraseñas



const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '$%&/()=?¿#[]{}<>';
const caracteresPassword = mayusculas + minusculas + numeros + simbolos;

const generatorBtn = document.getElementById('generator-btn');
const passwordOutput = document.getElementById('password-output');
const selector = document.getElementById('selector');


function passwordGenerator() {
    
    const leMay = obtenerCaracterAleatorio(mayusculas);
    const leMin = obtenerCaracterAleatorio(minusculas);
    const leNum = obtenerCaracterAleatorio(numeros);
    const leSim = obtenerCaracterAleatorio(simbolos);
    
    
    let password = leMay + leMin + leNum + leSim;
    
   
    const min = 12;
    const max = 50;
    
    let longitudDeseada;
    if (selector && selector.value) {
        longitudDeseada = parseInt(selector.value);
        longitudDeseada = Math.max(min, Math.min(max, longitudDeseada));
    } else {
        longitudDeseada = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    const caracteresAdicionales = longitudDeseada - 4;
    for (let i = 0; i < caracteresAdicionales; i++) {
        password += obtenerCaracterAleatorio(caracteresPassword);
    }
    
    password = mezcla(password);
    
        passwordOutput.innerHTML =`
        <p><strong>Su Contraseña:</strong></p> 
        ${password}`;

    return password;
}

function obtenerCaracterAleatorio(cadena) {
    const indiceAleatorio = Math.floor(Math.random() * cadena.length);
    return cadena.charAt(indiceAleatorio);
}


function mezcla(cadena) {
    const arr = cadena.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}


passwordGenerator();


if (generatorBtn) {
    generatorBtn.addEventListener('click', passwordGenerator);
}







