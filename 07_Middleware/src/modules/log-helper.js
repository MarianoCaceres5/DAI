import fs from 'fs';

export default function CopiaError(textoError){
    fs.appendFile('errorsFile.txt', textoError + "\n", function (err) {
        if (err) throw err;
        console.log('ERROR');
    });
}
