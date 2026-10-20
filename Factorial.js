let numero;

// Aquí quiero dejarle claro al usuario qué dato se espera que ingrese
while (true) {
    
    let entrada = prompt("Ingresa un número para calcular su factorial:");
    
    // Convierto el dato ingresado a número
    numero = Number(entrada);

    // Debe ser un número válido, no cero, no espacios, no vacío.
    if (Number.isNaN(numero) || entrada === null || entrada.trim() === "") {
        
        console.log("Error: El dato ingresado no es válido.");
        alert("Error: Por favor, ingresa solamente números.");
    } else {
        
        break;
    }
}


let factorial = 1;
const row = document.getElementById("Tablas");
// Quiero que recorra del 1 al número ingresado por el usuario. 
for (let i = 1; i <= numero; i++) {
    factorial = factorial * i; 
    
    console.log(`f:${factorial}`);
    console.log(`i: ${i}`);
    // Esta línea va a crear una caja nueva de acuerdo con el número ingresado por el usuario.
    row.innerHTML += `<p>Iteración <strong>${i}</strong> es: <strong>${factorial}</strong></p>`;
    
}


// Resultado final
console.log(`El factorial de ${numero} es: ${factorial}`);


const nodoResultado = document.getElementById("resultado");


if (nodoResultado) {
    nodoResultado.innerHTML = `<p>El factorial de <strong>${numero}</strong> es: <strong>${factorial}</strong></p>`;
}

