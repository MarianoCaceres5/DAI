//import url from "url"
import * as url from "url";

let adr = 'www.example.com/principal.html';
console.log(parseaUrl(adr));  

function urlValido(urlString){
    try{
        return Boolean(new URL(urlString));
    }
    catch(e){
        return false;
    }
}

function parseaUrl(urlString){

    if(urlValido(urlString)){
        let urlParseado = url.parse(urlString, true)
        let objetoUrl = {
            host:urlParseado.protocol + "//" + urlParseado.host,
            pathname:urlParseado.pathname,
            //parametros: url.query
            parametros: JSON.parse(JSON.stringify(urlParseado.query))
        }
        return objetoUrl;
    }else{
        return "URL no valido";
    }

}

