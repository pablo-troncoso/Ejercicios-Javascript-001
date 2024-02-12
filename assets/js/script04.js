// Solicitar a Usuario Cantidad de Días
const totalDias = parseInt(prompt("Ingrese la cantidad de días:"));

// Calcular la cantidad de Años, Semanas y Días
const anios = Math.floor(totalDias / 365);
const semanas = Math.floor((totalDias % 365) / 7);
const dias = totalDias - (anios * 365) - (semanas * 7);

// Paso 3: Mostrar el resultado de la conversión en consola
console.log("Años:", anios);
console.log("Semanas:", semanas);
console.log("Días:", dias);

// Mostrar el resultado de la conversión en un alert
alert(`${totalDias} días equivalen a: ${anios} año(s), ${semanas} semana(s) y ${dias} día(s).`);

// Mostrar el resultado de la conversión en el HTML usando innerHTML
const resultadosDiv = document.getElementById('resultados');
resultadosDiv.innerHTML = `<p>${totalDias} días equivalen a: ${anios} año(s), ${semanas} semana(s) y ${dias} día(s).</p>`;
