import UnidadesService from "../services/unidades-service.js";
import { Router } from "express";

let unidadesService = new UnidadesService();

const unidadesRouter = new Router();

unidadesRouter.get('', async (req, res) =>{
    try{
        let listaUnidades = await unidadesService.getAll();
        if(listaUnidades != null){
            res.status(200).send(listaUnidades);
        }else{
            res.status(404).send('Algo falló');   
        }
    }catch(e){
        console.log(e);        
    }
})

unidadesRouter.get('/:id', async (req, res) =>{
    try{
        let unidad = await unidadesService.getById(req.params.id);
        if(unidad != null){
            res.status(200).send(unidad);
        }else{
            res.status(404).send('<p>No se encontro la unidad</p>');   
        }
    }catch(e){
        console.log(e);        
    }
})

export default unidadesRouter;