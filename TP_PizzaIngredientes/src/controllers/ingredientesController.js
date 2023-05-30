import IngredientesService from "../services/ingredientes-service.js";
import { Router } from "express";
import Ingrediente from "../models/ingrediente.js"

let ingredientesService = new IngredientesService();

const ingredientesRouter = new Router();

ingredientesRouter.get('', async (req, res) =>{
    try{
        let listaIngredientes = await ingredientesService.getAll();
        if(listaIngredientes != null){
            res.status(200).send(listaIngredientes);
        }else{
            res.status(404).send('Algo falló');   
        }
    }catch(e){
        console.log(e);        
    }
})

ingredientesRouter.get('/:id', async (req, res) =>{
    try{
        let ingrediente = await ingredientesService.getById(req.params.id);
        if(ingrediente != null){
            res.status(200).send(ingrediente);
        }else{
            res.status(404).send('<p>No se encontro el ingrediente</p>');   
        }
    }catch(e){
        console.log(e);        
    }
})


ingredientesRouter.post('', async (req, res) =>{
    try{
        let nuevoIngrediente = new Ingrediente();
        nuevoIngrediente.nombre = (req.body.Nombre == undefined ? "" : req.body.Nombre);
        let rowsAffected = await ingredientesService.insert(nuevoIngrediente);
        if(rowsAffected[0] == 0){
            res.status(404).send('<p>No se pudo crear el ingrediente</p>');   
        }else{
            res.status(200).send('<p>Se creo ' + rowsAffected[0] +' ingrediente</p>'); 
            
        }   
    }catch(e){
        console.log(e);        
    }
})

ingredientesRouter.put('', async (req, res) =>{
    try{
        let nuevoIngrediente = new Ingrediente();
        nuevoIngrediente.id = (req.body.Id == undefined ? 0 : req.body.Id);
        nuevoIngrediente.nombre = (req.body.Nombre == undefined ? "" : req.body.Nombre);
        let rowsAffected = await ingredientesService.update(nuevoIngrediente);
        if(rowsAffected[0] != 0){
            res.status(200).send('<p>Se actualizo ' + rowsAffected[0] +' ingrediente</p>'); 
        }else{
            res.status(404).send('<p>No se pudo actualizar el ingrediente</p>');   
        }
           
    }catch(e){
        console.log(e)   
    }
})

ingredientesRouter.delete('/:id', async (req, res) =>{
    try{
        let rowsAffected = await ingredientesService.deleteById(req.params.id);
        if(rowsAffected[0] != 0){
            res.status(200).send('<p>Se elimino ' + rowsAffected[0]+' ingrediente</p>');    
        }else{
            res.status(404).send('<p>No se pudo eliminar el ingrediente</p>');  
        }
        
    }catch(e){
        console.log(e)
    }
})

export default ingredientesRouter;