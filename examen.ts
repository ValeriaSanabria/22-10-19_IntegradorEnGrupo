import { Pregunta } from "./pregunta";

export class Examen {
    protected preguntas: Pregunta[];
    protected tema: string;
    protected puntajeAprobacion: number;

    constructor(pTema: string, pPuntaje: number) {
        this.preguntas = [];
        this.tema = pTema;
        this.puntajeAprobacion = pPuntaje;
    }

    public addPregunta(pregunta: Pregunta): void {
        for (let i: number = 0; i < this.preguntas.length; i++) {
            if (this.preguntas[i].getConsigna() === pregunta.getConsigna()) {
                return;
            }
        }
        this.preguntas.push(pregunta);
    }

    public equals(o: Object): boolean {
        let encontrado = false;
        for (let i: number = 0; i < this.preguntas.length; i++) {
            if (o[i] === this.preguntas[i]) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            return true;
        } else {
            return false;
        }
    }

    public getPuntajeAprobacion(): number {
        return this.puntajeAprobacion;
    }

    public getPreguntas(): Pregunta[] {
        return this.preguntas;
    }

    public getTema(): string {
        return this.tema;
    }
}