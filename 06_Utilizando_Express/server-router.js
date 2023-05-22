import PizzaService from "./src/services/pizzas-services.js";
import Pizza from "./src/models/pizza.js";
import express from "express";
import cors from "cors"
import {router as PizzaRouter} from "./src/controllers/pizzaController.js";
// import bodyParser from 'body-parser';

let pizzaService = new PizzaService();

const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use(express.static('public'));

app.use("/Pizzas", PizzaRouter)

app.listen(port, () => {
    console.log("Escuchando en el puerto " + port);
});
