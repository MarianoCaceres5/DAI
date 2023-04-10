import countryToCurrency from "country-to-currency";

let monedaDelPais, codigoPais;

codigoPais = 'AR'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`); 

codigoPais = 'UZA'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'US'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'HR'; // Croacia
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'MESSI'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais){
    if(countryToCurrency[ codigoPais ] != undefined){
        return countryToCurrency[ codigoPais ];
    }else return null
}