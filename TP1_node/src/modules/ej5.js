//import url from "url"
import * as url from "url";

let adr = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
console.log(parseaUrl(url.parse(adr, true)));  

function parseaUrl(url){
    let objetoUrl = {
        host:url.protocol + "//" + url.host,
        pathname:url.pathname,
        parametros: url.query
    }
    return objetoUrl;
}

