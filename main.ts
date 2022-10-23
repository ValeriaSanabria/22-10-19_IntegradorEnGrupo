import { Pregunta } from "./pregunta";
import { Examen } from "./examen";
import { ExamenEspecial } from "./examenEspecial";
import { Alumno } from "./alumno";
import { RendicionDeExamen } from "./rendicionExamen";

let preguntas1 = new Pregunta("¿Que edad tiene?", ["20", "25", "30"], 2, 2);
let preguntas2 = new Pregunta("¿Sabe programacion?", ["si", "no"], 1, 4);

let arrayPreguntas = [preguntas1, preguntas2];

let examen1 = new Examen(arrayPreguntas, "Matematica", 10);
let examen2 = new Examen(arrayPreguntas, "Programacion", 10);

let examenEspecial1 = new ExamenEspecial(arrayPreguntas, "Especial", 10, -5);

let respuestasExamen1 = [2];
let respuestasExamen2 = [1];
let respuestasExamenEspecial1 = [7];

let rendicionDeExamen1 = new RendicionDeExamen(examen1, respuestasExamen1);
let rendicionDeExamen2 = new RendicionDeExamen(examen2, respuestasExamen2);
let rendicionDeExamenEspecial = new RendicionDeExamen(examenEspecial1, respuestasExamenEspecial1);

let arrayExamenes1 = [rendicionDeExamen1];
let arrayExamenes2 = [rendicionDeExamen2];
let arrayExamenes3 = [rendicionDeExamenEspecial];

let alumno1 = new Alumno(arrayExamenes1, "Ramiro", 18000);

/* console.log(examen1.equals(preguntas1)); */
examenEspecial1.examenEspecial("comedia", 10, -2);
console.log(alumno1.getNombre());