"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(pExamenesRendidos, pNombre, pDni) {
        this.examenesRendidos = pExamenesRendidos;
        this.nombre = pNombre;
        this.dni = pDni;
    }
    Alumno.prototype.alumno = function (nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getDni = function () {
        return this.dni;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
