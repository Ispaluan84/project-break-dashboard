//Fondo 

function background() {

  const image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg'];
  const imageRandom = image[Math.floor(Math.random() * image.length)];
  document.body.style.backgroundImage = `url('${imageRandom}')`
  
  }
  
  background()
  setInterval(background, 15000)


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

  function mostrarMensaje() {
    let text = '';
    
    if (hours >= 0 && hours <= 7) {
      text = 'Es hora de descansar, mañana hay que empezar con buen pie';
    } else if (hours >= 8 && hours < 12) {
      text = 'Buenos días, un buen desayuno y a darle al código';
    } else if (hours >= 12 && hours < 15) {
      text = 'No olvides que hay que comer para seguir con energía';
    } else if (hours >= 15 && hours <= 19) {
      text = 'Eyy, sigue un poco más pero atento a la hora';
    } else {
      text = 'Ve pensando en la cena y vamos a ir terminando el día';

    }
      message.textContent = text
  }

  mostrarMensaje()
}

const intervalo = setInterval(hora,1000);

hora();








