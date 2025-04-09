const dateDiv = document.getElementById('date');
const clockDiv = document.getElementById('clock');

function fecha() {
const currentDate = new Date(); 
const [day, date, month, year] = [
   currentDate.getDay(),
   currentDate.getDate(),
   currentDate.getMonth(),
   currentDate.getFullYear(),
]
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formatter = new Intl.DateTimeFormat('es-ES', options);
dateDiv.innerHTML =  formatter.format(currentDate)
}

fecha();

function hora() {
  const currentClock = new Date();
  const [Hours, minutes, seconds] = [
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








