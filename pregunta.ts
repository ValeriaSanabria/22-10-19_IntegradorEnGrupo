export class Pregunta {
    protected consigna: string;
    protected opciones: string[];
    protected opcionCorrecta: number;
    protected puntaje: number;

    constructor(pConsigna: string, pOpciones: string[], pOpcionCorrecta: number, pPuntaje: number) {
        this.consigna = pConsigna;
        this.opciones = pOpciones;
        this.opcionCorrecta = pOpcionCorrecta;
        this.puntaje = pPuntaje;
    }

    public pregunta(consigna: string, puntaje: number): any {
        console.log(`La pregunta es ${consigna} y vale ${puntaje} puntos`);
    }

    public addOpcion(opcion: string): void {
        this.opciones.push(opcion);
    }

    public setOpcionCorrecta(opcionCorrecta: number): void {
        this.opcionCorrecta = opcionCorrecta;
    }

    public esCorrecta(respuesta: number): boolean {
        if (respuesta === this.opcionCorrecta) {
            return true;
        } else {
            return false;
        }
    }

    public getPuntaje(): number {
        return this.puntaje;
    }
}