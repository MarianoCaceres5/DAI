import express from "express";
import cors from "cors"
import pizzaRouter from "./src/controllers/pizzaController.js";
import ingredientesXPizzaRouter from "./src/controllers/ingredientesXPizzaController.js";
import ingredientesRouter from "./src/controllers/ingredientesController.js";
import unidadesRouter from "./src/controllers/unidadesController.js";

const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.static('public'));

const tiempoTranscurrido = function (req, res, next){
    let tiempo1 = new Date();
    console.log("Tiempo inicial: " + tiempo1.toISOString())
    next();
    let tiempo2 = new Date();
    console.log("Tiempo final: " + tiempo2.toISOString())
    console.log("Tiempo transcurrido: " + (tiempo2 - tiempo1).toString() + " milisegundo/s");
}

const checkApiKey = function  (req, res, next){
    if(req.headers.apikey != undefined && req.headers.apikey != null && req.headers.apikey == "123456789"){
        next();
    }else{
        res.status(401).send('Unauthorized, es necesario una ApiKey Valida');
    }
}

const headerResponse = function (req, res, next){
    res.set('CreatedBy', 'Mariano');
    next();
}

app.use(tiempoTranscurrido);
app.use(checkApiKey);
app.use(headerResponse);
app.use("/Pizzas", pizzaRouter)
app.use("/Ingredientes", ingredientesRouter)
app.use("/Unidades", unidadesRouter)
app.use("/IngredientesPorPizza", ingredientesXPizzaRouter)


app.listen(port, () => {
    console.log("Escuchando en el puerto " + port);
});
