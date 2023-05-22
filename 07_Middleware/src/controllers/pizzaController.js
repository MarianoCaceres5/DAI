import PizzaService from "../services/pizzas-services.js";
import Pizza from "../models/pizza.js";
import express, { Router } from "express";
import cors from "cors"

let pizzaService = new PizzaService();

const router = new Router();

router.get('', async (req, res) =>{
    try{
        let listaPizzas = await pizzaService.getAll((req.query.top == undefined ? null : req.query.top), (req.query.orderField == undefined ? null : req.query.orderField), (req.query.sortOrder == undefined ? null : req.query.sortOrder));
        res.send(listaPizzas);
    }catch(e){
        console.log(e);
        res.send('Algo falló');
    }
})

router.get('/:id', async (req, res) =>{
    try{
        let pizzaElegida = await pizzaService.getById(req.params.id);
        res.status(200).send(pizzaElegida);
    }catch(e){
        console.log(e);
        res.status(404).send('<p>No se encontro la pizza</p>');
    }
})

router.post('', async (req, res) =>{
    try{
        let pizzaNueva = new Pizza(0, (req.body.Nombre == undefined ? "" : req.body.Nombre), (req.body.LibreGluten == undefined ? false : req.body.LibreGluten), (req.body.Importe == undefined ? 0 : req.body.Importe), (req.body.Descripcion == undefined ? "" : req.body.Descripcion));        
        let rowsAffected = await pizzaService.insert(pizzaNueva);
        res.status(200).send('<p>Se creo ' + rowsAffected[0] +' pizza</p>');    
    }catch(e){
        res.status(404).send('<p>No se pudo crear la pizza</p>');   
    }
})

router.put('', async (req, res) =>{
    try{
        let pizzaNueva = new Pizza((req.body.Id == undefined ? -1 : req.body.Id), req.body.Nombre, req.body.LibreGluten, req.body.Importe, req.body.Descripcion);
        let rowsAffected = await pizzaService.update(pizzaNueva);
        res.status(200).send('<p>Se actualizo ' + rowsAffected[0] +' pizza</p>');    
    }catch(e){
        res.status(404).send('<p>No se pudo actualizar la pizza</p>');   
    }
})

router.delete('/:id', async (req, res) =>{
    try{
        let rowsAffected = await pizzaService.deleteById(req.params.id);
        res.status(200).send('<p>Se elimino ' + rowsAffected[0] +' pizza</p>');    
    }catch(e){
        res.status(404).send('<p>No se pudo eliminar la pizza</p>');   
    }
})


export default router;