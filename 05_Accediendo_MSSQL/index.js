import PizzaService from "./src/services/pizzas-services.js";
import Pizza from "./src/models/pizza.js";

let pizzaService = new PizzaService();

//GetById
// console.log(pizzaService.getById(2).then(val => console.log(val)));

//GetAll
// console.log(pizzaService.getAll().then(val => console.log(val)));

//Update
// let pizzaActualizada = new Pizza(6, 'Pizza Mucho Poco', true, 444, 'Mucha pizza');
// console.log(pizzaService.update(pizzaActualizada).then(val => console.log(val)));

//DeleteById
// console.log(pizzaService.deleteById(3).then(val => console.log(val))); // elimine la pizza 3

//Insert
let pizzaNueva = new Pizza(999, 'Pizza Nueva', true, 0, 'Nueva pizza');
console.log(pizzaService.insert(pizzaNueva).then(val => console.log(val)));