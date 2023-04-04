import Alumno from "../models/alumno.js";

let alumno1 = new Alumno("Mariano", 46956818), alumno2 = new Alumno("Tiago", 47636741);;
console.log(alumno1.mostrar() + " // " + alumno2.mostrar());