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

// Código Generador Contraseñas




//Código Enlaces


//Código Estación Meteorológica


