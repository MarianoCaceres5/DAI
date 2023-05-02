import PizzaService from "./src/services/pizzas-services.js";
import Pizza from "./src/models/pizza.js";
import express from "express";

let pizzaService = new PizzaService();

const app = express();
const port = 3000;

app.get('/Pizzas/insert', function (req, res){ // consultar por que solo anda con get
    try{        
        let pizzaNueva = new Pizza(0, (req.query.Nombre == undefined ? "" : req.query.Nombre), (req.query.LibreGluten == undefined ? false : req.query.LibreGluten), (req.query.Importe == undefined ? 0 : req.query.Importe), (req.query.Descripcion == undefined ? "" : req.query.Descripcion));
        let rowsAffected = pizzaService.insert(pizzaNueva);
        if(rowsAffected != 0){
            res.status(200).send('<p>Se creo la pizza</p>'); 
        }else{
            res.status(404).send('<p>No se pudo crear la pizza</p>'); 
        }
               
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
            res.status(404).send('<p>No se encuentra la pizza</p>'); 
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