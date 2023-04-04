import fs from 'fs';
copiar('entrada.txt', 'salida.txt')

function copiar(entrada, salida){
    fs.copyFile(entrada, salida, (err) => {
        if (err) throw err;
        console.log('El contenido del archivo fue copiado');
      });
}


   
