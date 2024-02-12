//EJERCICIO 3
// Solicitar al usuario que ingrese la temperatura en Grados Celsius
const celsius = parseInt(prompt("Hola ingresa la Temperatura en Grados Celsius:"));

//Convertir la Temperatura a Grados Kelvin y Fahrenheit
const kelvin = celsius + 273.15;
const fahrenheit = (celsius * 9/5) + 32;

//Ver Resultados de la Conversión
alert("Temperatura en Grados Kelvin: "+ kelvin);
alert("Temperatura en Grados Fahrenheit: "+ fahrenheit);