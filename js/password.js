// Fondo Página
function background() {

    const image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg'];
    const imageRandom = image[Math.floor(Math.random() * image.length)];
    document.body.style.backgroundImage = `url('${imageRandom}')`
    
    }
    
    background()
    setInterval(background, 15000)

// Creador Contraseñas

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

