// Solicitar al usuario que Ingreso de 5 números
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
const numero3 = parseFloat(prompt("Ingresa el tercer número:"));
const numero4 = parseFloat(prompt("Ingresa el cuarto número:"));
const numero5 = parseFloat(prompt("Y ahora Ingresa el quinto número:"));

// Calcular Suma de los 5 Números
const suma = numero1 + numero2 + numero3 + numero4 + numero5;

// Calcular Promedio de los 5 números
const promedio = suma / 5;

// Mostrar los resultados en HTML
const resultadosDiv = document.getElementById("resultados");
resultadosDiv.innerHTML = `
    <p>La suma de los números es: ${suma}</p>
    <p>El promedio de los números es: ${promedio}</p>
`;
