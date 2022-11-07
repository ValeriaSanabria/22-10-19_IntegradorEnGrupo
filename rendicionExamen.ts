import { Alumno } from "./alumno";
import { Examen } from "./examen";

export class RendicionDeExamen {
    protected examen: Examen;
    protected respuestas: number[];

    constructor(pExamen: Examen, pRespuestas: number[]) {
        this.examen = pExamen;
        this.respuestas = pRespuestas;
    }

    public rendicionDeExamen(examen: Examen, respuestas: number[]): void {
        if (examen.getTema() === examen.getTema()) {
            for (let i: number = 0; i < respuestas.length; i++) {
                respuestas.push(respuestas[i]);
            }
        }
    }

    public getExamen(): Examen {
        return this.examen;
    }

    public estaAprobado(): boolean {
        var examen = this.getExamen();
        var respuestas = this.respuestas;

        var puntos = 0;
        
        var preguntas = examen.getPreguntas();
        var puntajeAprobacion = examen.getPuntajeAprobacion();

        for (let i: number = 0; i < preguntas.length; i++) {
            if (preguntas[i].esCorrecta(respuestas[i])) {
                puntos = puntos + preguntas[i].getPuntaje();
            }
        }

        if (puntos >= puntajeAprobacion) {
            return true;
        } else {
            return false;
        }
    }
}