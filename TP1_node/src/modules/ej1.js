let nombre="Facundo",apellido="Vaisberg";
let nombreCompleto = nombre+apellido;
const invertirString = str => str.split("").reverse().join("");
console.log(`Textos de entrada: ${nombre} y ${apellido}`);
console.log(`Texto de salida -> ${invertirString(nombreCompleto)}`);
