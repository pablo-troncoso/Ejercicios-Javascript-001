// Solicitar al usuario que ingrese dos números

const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Calcular las Operaciones Matemáticas
const suma = num1 + num2;
const resta = num1 - num2;
const division = num1 / num2;
const multiplicacion = num1 * num2;
const modulo = num1 % num2;

// Resultados de las operaciones en Consola
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("División:", division);
console.log("Multiplicación:", multiplicacion);
console.log("Módulo:", modulo);

//Usando Document.write
document.write(`La suma de ${num1} y ${num2} es ${suma}
La resta de ${num1} y ${num2} es ${resta}
La división de ${num1} y ${num2} es ${division}
La multiplicación de ${num1} y ${num2} es ${multiplicacion}
El módulo de ${num1} y ${num2} es ${modulo}`);
