"use strict";
exports.__esModule = true;
exports.Pregunta = void 0;
var Pregunta = /** @class */ (function () {
    function Pregunta(pConsigna, pOpciones, pOpcionCorrecta, pPuntaje) {
        this.consigna = pConsigna;
        this.opciones = pOpciones;
        this.opcionCorrecta = pOpcionCorrecta;
        this.puntaje = pPuntaje;
    }
    Pregunta.prototype.pregunta = function (consigna, puntaje) {
        console.log("La pregunta es ".concat(consigna, " y vale ").concat(puntaje, " puntos"));
    };
    Pregunta.prototype.addOpcion = function (opcion) {
        this.opciones.push(opcion);
    };
    Pregunta.prototype.setOpcionCorrecta = function (opcionCorrecta) {
        this.opcionCorrecta = opcionCorrecta;
    };
    Pregunta.prototype.esCorrecta = function (respuesta) {
        if (respuesta === this.opcionCorrecta) {
            return true;
        }
        else {
            return false;
        }
    };
    Pregunta.prototype.getPuntaje = function () {
        return this.puntaje;
    };
    return Pregunta;
}());
exports.Pregunta = Pregunta;
