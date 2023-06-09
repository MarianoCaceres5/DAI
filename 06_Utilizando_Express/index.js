import PizzaService from "./src/services/pizzas-services.js";
import Pizza from "./src/models/pizza.js";
import express, { json } from "express";
import cors from "cors"
// import bodyParser from 'body-parser';

let pizzaService = new PizzaService();

const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use(express.static('public'));

app.delete('/Pizzas/deleteById/:id', function (req, res){
    try{                
        let rowsAffected = pizzaService.deleteById(req.params.id);
        rowsAffected.then((rowsAffected) =>{
            if(rowsAffected[0] === 1){
                res.status(200).send('<p>La pizza se elimino correctamente</p>'); 
            }else{
                res.status(404).send('<p>No se pudo eliminar ninguna pizza</p>'); 
            }
        })  
               
    }catch(e){
        res.status(404).send('<p>No se pudo eliminar ninguna pizza</p>');        
    }
});


app.put('/Pizzas/update', function (req, res){
    try{        
        console.log(req.body.Id)
        let pizzaNueva = new Pizza((req.body.Id == undefined ? -1 : req.body.Id), req.body.Nombre, req.body.LibreGluten, req.body.Importe, req.body.Descripcion);
        let rowsAffected = pizzaService.update(pizzaNueva);
        // rowsAffected.then(function(rowsAffected){console.log(rowsAffected[0])})
        rowsAffected.then((rowsAffected) =>{
            if(rowsAffected[0] === 1){
                res.status(200).send('<p>Se actualizo la pizza</p>'); 
            }else{
                res.status(404).send('<p>No se pudo actualizar ninguna pizza</p>'); 
            }
        })       
    }catch(e){
        res.status(404).send('<p>No se pudo actualizar ninguna pizza</p>');        
    }
});

app.post('/Pizzas/insert', function (req, res){
    try{        
        let pizzaNueva = new Pizza(0, (req.body.Nombre == undefined ? "" : req.body.Nombre), (req.body.LibreGluten == undefined ? false : req.body.LibreGluten), (req.body.Importe == undefined ? 0 : req.body.Importe), (req.body.Descripcion == undefined ? "" : req.body.Descripcion));
        let rowsAffected = pizzaService.insert(pizzaNueva);
        // rowsAffected.then((rowsAffected) =>{
        //     if(rowsAffected[0] === 1){
        //         res.status(200).send('<p>Se creo la pizza</p>'); 
        //     }else{
        //         res.status(404).send('<p>No se pudo crear la pizza</p>');                 
        //     }
        // })     
        res.status(200).send('<p>Se creo la pizza</p>');                   
    }catch(e){
        res.status(404).send('<p>No se pudo crear la pizza</p>');        
    }
});

app.get('/Pizzas/getAll', function (req, res){

    try{
        let listaPizzas = pizzaService.getAll((req.query.top == undefined ? null : req.query.top), (req.query.orderField == undefined ? null : req.query.orderField), (req.query.sortOrder == undefined ? null : req.query.sortOrder));
        if(listaPizzas != null){
            listaPizzas.then(val => res.send(val));
        }else{
            res.send('Algo falló');
        }
        
    }catch(e){
        res.send('Algo falló');        
    }
});

app.get('/Pizzas/getById/:id', function (req, res){
    try{                
        let pizzaElegida = pizzaService.getById(req.params.id);
        if(pizzaElegida != null){
            pizzaElegida.then(val => res.send(val)); 
        }else{
            res.send('<p>No se encuentra la pizza</p>'); 
        }
               
    }catch(e){
        res.status(404).send('<p>No se encuentra la pizza</p>');        
    }
});


app.listen(port, () => {
    console.log("Escuchando en el puerto " + port);
});


//GetById
//console.log(pizzaService.getById(19).then(val => console.log(val)));

//GetAll
//console.log(pizzaService.getAll().then(val => console.log(val)));
// console.log(pizzaService.getAll(10, 'Nombre', 'ASC').then(val => console.log(val)));
//console.log(pizzaService.getAll(null, 'LibreGluten', 'DESC').then(val => console.log(val)));
// console.log(pizzaService.getAll(null, null, null).then(val => console.log(val)));
//console.log(pizzaService.getAll(2, 'Id', null).then(val => console.log(val)));
//console.log(pizzaService.getAll(null, null, 'ASC').then(val => console.log(val)));

//Update
// let pizzaActualizada = new Pizza(15, 'Pizza Mucho Poco', true, 444, 'Mucha pizza');
// console.log(pizzaService.update(pizzaActualizada).then(val => console.log(val)));

//DeleteById
// console.log(pizzaService.deleteById(5).then(val => console.log(val))); // elimine la pizza 3

//Insert
//let pizzaNueva = new Pizza(999, 'Pizza Nueva', true, 0, 'Nueva pizza');
//console.log(pizzaService.insert(pizzaNueva).then(val => console.log(val)));