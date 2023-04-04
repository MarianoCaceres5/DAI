//import url from "url"
import * as url from "url";

let adr = 'http://www.ort.edu.ar:8080/alumnos/index.html?curso=2022&mes=mayo';
console.log(parseaUrl(url.parse(adr, true)));  

function parseaUrl(url){
    
    let objetoUrl = {
        host:url.protocol + "//" + url.host,
        pathname:url.pathname,
        //parametros: url.query
        parametros: JSON.parse(JSON.stringify(url.query))
    }
    return objetoUrl;
}

