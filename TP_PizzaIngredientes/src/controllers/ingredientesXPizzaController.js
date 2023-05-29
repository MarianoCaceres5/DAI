import IngredientesXPizzaService from "../services/ingredientesXPizza-service.js";
import { Router } from "express";

let svc = new IngredientesXPizzaService();

const ingredientesXPizzaRouter = new Router();

ingredientesXPizzaRouter.get('/:id', async (req, res) =>{
    try{
        let ingredientes = await svc.getByIdPizza(req.params.id);
        if(ingredientes !== null){
            res.status(200).send(ingredientes);
        }else{
            res.status(404).send('<p>No se encontraron los ingredientes</p>');
        }
    }catch(e){
        console.log(e);
    }
})

export default ingredientesXPizzaRouter;