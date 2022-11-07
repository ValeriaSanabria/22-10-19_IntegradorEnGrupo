export class Pregunta {
    protected consigna: string;
    protected opciones: string[];
    protected opcionCorrecta: number;
    protected puntaje: number;

    constructor(pConsigna: string, pPuntaje: number) {
        this.consigna = pConsigna;
        this.puntaje = pPuntaje;
    }

    public addOpcion(opcion: string): void {
        for (let i: number = 0; i < this.opciones.length; i++) {
            if (this.opciones[i] === opcion) {
                return;
            }
        }
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

    public getConsigna(): string {
        return this.consigna;
    }
}