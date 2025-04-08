//Crear variables par los caracteres utilizables


function passwordGenerator () {
const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '$%&/()=?¿#[]{}<>';
const generator = document.getElementById('generator')

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

const caracteresPassword = mayusculas + minusculas + numeros + simbolos;
const min = 12;
const max = 50;
const longitudDeseada = Math.floor(Math.random(max - min + 1)) + min;
const caracteresAdicionales = longitudDeseada - 4;
for (let i = 0 ; i < caracteresAdicionales ; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteresPassword.length);
    password += caracteresPassword.charAt(indiceAleatorio);
}

password = mezcla(password);

if(generator) {
    generator.value = password;
} else {
    console.log('Contraseña generada', password)
}
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














/* 
*/