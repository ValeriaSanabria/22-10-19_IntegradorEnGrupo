import { Examen } from "./examen";
import { RendicionDeExamen } from "./rendicionExamen";

export class Alumno {
    private examenesRendidos: RendicionDeExamen[];
    private nombre: string;
    private dni: number;

    constructor(pNombre: string, pDni: number) {
        this.examenesRendidos = [];
        this.nombre = pNombre;
        this.dni = pDni;
    }

    public alumno(nombre: string, dni: number): void {
        this.nombre = nombre;
        this.dni = dni;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getDni(): number {
        return this.dni;
    }

    public rendirExamen(examen: Examen, respuestas: number[]): boolean {
        for (let i: number = 0; i < this.examenesRendidos.length; i++) {
            if (this.examenesRendidos[i].getExamen().getTema() === examen.getTema()) {
                return false;
            }
        }

        let rendicionExamen = new RendicionDeExamen(examen, respuestas);
        this.examenesRendidos.push(rendicionExamen);
        return true;
    }
}