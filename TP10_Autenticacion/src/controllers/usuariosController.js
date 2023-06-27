import UsuariosService from "../services/usuarios-service.js";
import { Router } from "express";

let usuariosService = new UsuariosService();

const usuariosRouter = new Router();

usuariosRouter.get('', async (req, res) =>{
    try{
        let listaUsuarios = await usuariosService.getAll();
        if(listaUsuarios != null){
            res.status(200).send(listaUsuarios);
        }else{
            res.status(404).send('Algo falló');   
        }
    }catch(e){
        console.log(e);        
    }
})

usuariosRouter.get('/:id', async (req, res) =>{
    try{
        let usuario = await usuariosService.getById(req.params.id);
        if(usuario != null){
            res.status(200).send(usuario);
        }else{
            res.status(404).send('<p>No se encontro el usuario</p>');   
        }
    }catch(e){
        console.log(e);        
    }
})

usuariosRouter.post('/login', async (req, res) =>{
    try{
        let usuario = req.body;
        let usuarioActualizado = await usuariosService.login(usuario);
        if(usuarioActualizado != null){
            res.status(200).send(usuarioActualizado);
        }else{
            res.status(404).send('<p>No fue posible realizar el login</p>');   
        }
    }catch(e){
        console.log(e);        
    }
})

export default usuariosRouter;