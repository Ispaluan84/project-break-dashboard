//Crear variables par los caracteres utilizables



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

