import PizzaService from "../services/pizzas-services.js";
import Pizza from "../models/pizza.js";
import { Router } from "express";

let pizzaService = new PizzaService();

const pizzaRouter = new Router();

pizzaRouter.get('', async (req, res) =>{
    try{
        let listaPizzas = await pizzaService.getAll((req.query.top == undefined ? null : req.query.top), (req.query.orderField == undefined ? null : req.query.orderField), (req.query.sortOrder == undefined ? null : req.query.sortOrder));
        if(listaPizzas != null){
            res.status(200).send(listaPizzas);
        }else{
            res.status(404).send('Algo falló');   
        }
    }catch(e){
        console.log(e);        
    }
})

pizzaRouter.get('/:id', async (req, res) =>{
    try{
        let traerIngredientes = (typeof req.query.traerIngredientes !== 'undefined' && req.query.traerIngredientes.toLowerCase() === 'true');
        let pizzaElegida = await pizzaService.getById(req.params.id, traerIngredientes);
        if(pizzaElegida !== null){
            res.status(200).send(pizzaElegida);
        }else{
            res.status(404).send('<p>No se encontro la pizza</p>');
        }
        
    }catch(e){
        console.log(e);
    }
})

pizzaRouter.post('', async (req, res) =>{
    try{
        let pizzaNueva = new Pizza(0, (req.body.Nombre == undefined ? "" : req.body.Nombre), (req.body.LibreGluten == undefined ? false : req.body.LibreGluten), (req.body.Importe == undefined ? 0 : req.body.Importe), (req.body.Descripcion == undefined ? "" : req.body.Descripcion));        
        let rowsAffected = await pizzaService.insert(pizzaNueva);
        if(rowsAffected[0] == 0){
            res.status(404).send('<p>No se pudo crear la pizza</p>');   
        }else{
            res.status(200).send('<p>Se creo ' + rowsAffected[0] +' pizza</p>'); 
            
        }           
    }catch(e){
        console.log(e)
    }
})

pizzaRouter.put('', async (req, res) =>{
    try{
        let pizzaNueva = new Pizza((req.body.Id == undefined ? -1 : req.body.Id), req.body.Nombre, req.body.LibreGluten, req.body.Importe, req.body.Descripcion);
        let rowsAffected = await pizzaService.update(pizzaNueva);
        if(rowsAffected[0] != 0){
            res.status(200).send('<p>Se actualizo ' + rowsAffected[0] +' pizza</p>'); 
        }else{
            res.status(404).send('<p>No se pudo actualizar la pizza</p>');   
        }
           
    }catch(e){
        console.log(e)   
    }
})

pizzaRouter.delete('/:id', async (req, res) =>{
    try{
        let rowsAffected = await pizzaService.deleteById(req.params.id);
        if(rowsAffected[0] != 0){
            res.status(200).send('<p>Se elimino ' + rowsAffected[0]+' pizza</p>');    
        }else{
            res.status(404).send('<p>No se pudo eliminar la pizza</p>');  
        }
        
    }catch(e){
        console.log(e)
    }
})


export default pizzaRouter;