import fs from 'fs';

fs.writeFile('salida.txt', 'Crear archivo', function (err) {
  if (err) throw err;
  console.log('El archivo fue creado exitosamente');
});

copiar('entrada.txt', 'salida.txt')

function copiar(entrada, salida){
    fs.copyFile(entrada, salida, (err) => {
        if (err) throw err;
        console.log('El contenido del archivo original fue copiado');
      });
}


   
