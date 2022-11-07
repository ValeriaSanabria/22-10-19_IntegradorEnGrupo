import { Pregunta } from "./pregunta";
import { Examen } from "./examen";
import { ExamenEspecial } from "./examenEspecial";
import { Alumno } from "./alumno";
import { RendicionDeExamen } from "./rendicionExamen";

let preguntas1 = new Pregunta("¿Que edad tiene?", 2);
let preguntas2 = new Pregunta("¿Sabe programacion?", 4);

let arrayPreguntas = [preguntas1, preguntas2];

let examen1 = new Examen("Matematica", 10);
let examen2 = new Examen("Programacion", 10);

let examenEspecial1 = new ExamenEspecial("Especial", 10, -5);

let respuestasExamen1 = [2];
let respuestasExamen2 = [1];
let respuestasExamenEspecial1 = [7];

let rendicionDeExamen1 = new RendicionDeExamen(examen1, respuestasExamen1);
let rendicionDeExamen2 = new RendicionDeExamen(examen2, respuestasExamen2);
let rendicionDeExamenEspecial = new RendicionDeExamen(examenEspecial1, respuestasExamenEspecial1);

let arrayExamenes1 = [rendicionDeExamen1];
let arrayExamenes2 = [rendicionDeExamen2];
let arrayExamenes3 = [rendicionDeExamenEspecial];

let alumno1 = new Alumno("Ramiro", 18000);

/* console.log(examen1.equals(preguntas1)); */
console.log(alumno1.getNombre());