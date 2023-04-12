import PizzaService from "./src/services/pizzas-services.js";

let pizzaService = new PizzaService();

//GetById
// console.log(pizzaService.getById(2).then(val => console.log(val)));

//GetAll
console.log(pizzaService.getAll().then(val => console.log(val)));