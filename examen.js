"use strict";
exports.__esModule = true;
exports.Examen = void 0;
var Examen = /** @class */ (function () {
    function Examen(pPreguntas, pTema, pPuntaje) {
        this.preguntas = pPreguntas;
        this.tema = pTema;
        this.puntajeAprobacion = pPuntaje;
    }
    Examen.prototype.examen = function (tema, puntajeAprobacion) {
        console.log("El tema ".concat(tema, " se aprueba con ").concat(puntajeAprobacion));
    };
    Examen.prototype.addPregunta = function (pregunta) {
        this.preguntas.push(pregunta);
    };
    Examen.prototype.equals = function (o) {
        var encontrado = false;
        for (var i = 0; i < this.preguntas.length; i++) {
            if (o[i] === this.preguntas[i]) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            return true;
        }
        else {
            return false;
        }
    };
    Examen.prototype.getTema = function () {
        return this.tema;
    };
    return Examen;
}());
exports.Examen = Examen;
