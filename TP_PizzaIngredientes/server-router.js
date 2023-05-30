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

app.use("/Pizzas", pizzaRouter)
app.use("/Ingredientes", ingredientesRouter)
app.use("/Unidades", unidadesRouter)
app.use("/IngredientesPorPizza", ingredientesXPizzaRouter)


app.listen(port, () => {
    console.log("Escuchando en el puerto " + port);
});
