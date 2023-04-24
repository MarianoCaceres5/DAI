import PizzaService from "./src/services/pizzas-services.js";
import Pizza from "./src/models/pizza.js";

let pizzaService = new PizzaService();

//GetById
//console.log(pizzaService.getById(19).then(val => console.log(val)));

//GetAll
//console.log(pizzaService.getAll().then(val => console.log(val)));
// console.log(pizzaService.getAll(10, 'Nombre', 'ASC').then(val => console.log(val)));
//console.log(pizzaService.getAll(null, 'LibreGluten', 'DESC').then(val => console.log(val)));
// console.log(pizzaService.getAll(null, null, null).then(val => console.log(val)));
console.log(pizzaService.getAll(2, 'Id', null).then(val => console.log(val)));
//console.log(pizzaService.getAll(null, null, 'ASC').then(val => console.log(val)));

//Update
// let pizzaActualizada = new Pizza(15, 'Pizza Mucho Poco', true, 444, 'Mucha pizza');
// console.log(pizzaService.update(pizzaActualizada).then(val => console.log(val)));

//DeleteById
// console.log(pizzaService.deleteById(5).then(val => console.log(val))); // elimine la pizza 3

//Insert
//let pizzaNueva = new Pizza(999, 'Pizza Nueva', true, 0, 'Nueva pizza');
//console.log(pizzaService.insert(pizzaNueva).then(val => console.log(val)));