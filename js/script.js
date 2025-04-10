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


const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '$%&/()=?¿#[]{}<>';
const generatorBtn = document.getElementById('generator-btn');
const passwordOutput = document.getElementById('password-output');
const selector = document.getElementById('selector');



function passwordGenerator () {
const alMay = Math.floor(Math.random() * mayusculas.length)
const leMay = mayusculas[alMay];

const alMin = Math.floor(Math.random() * minusculas.length)
const leMin = minusculas[alMin];

const alNum = Math.floor(Math.random() * numeros.length);
const leNum = numeros[alNum];

const alSim = Math.floor(Math.random() * simbolos.length);
const leSim = simbolos[alSim];
let password = leMay + leMin + leNum + leSim;

function aleatoriedad(password) {


const min = 12;
const max = 50;

let longitudDeseada;
if(selector && selector.value) {

    longitudDeseada = parseInt(selector.value);
    longitudDeseada = Math.max(min, Math.min(max, longitudDeseada));
} else {
    longitudDeseada = Math.floor(Math.random() * (max - min + 1)) + min;
}

const caracteresPassword = mayusculas + minusculas + numeros + simbolos;

const caracteresAdicionales = longitudDeseada - 4;


for (let i = 0 ; i < caracteresAdicionales ; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteresPassword.length);
    password += caracteresPassword.charAt(indiceAleatorio);
}

password = mezcla(password);

if(passwordOutput) {
    passwordOutput.value = password;
} else {
    console.log('Contraseña generada', password)
}

    return password;
}

function mezcla(cadena) {
    const arr = cadena.split('');
    for (let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('')
 
}

aleatoriedad(password)
}
passwordGenerator()

if (generatorBtn) {
    generatorBtn.addEventListener('click', function() {
         passwordGenerator()
    });
}