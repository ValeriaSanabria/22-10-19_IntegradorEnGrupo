import { Examen } from "./examen";
import { Pregunta } from "./pregunta"

export class ExamenEspecial extends Examen {
    private penalizacionRepuestaIncorrecta: number;

    constructor(pTema: string, pPuntaje: number, pPenalizacion: number) {
        super(pTema, pPuntaje);
        this.penalizacionRepuestaIncorrecta = pPenalizacion;
    }

    public getPenalizacionRespuestaIncorrecta(): number {
        return this.penalizacionRepuestaIncorrecta;
    }
} 