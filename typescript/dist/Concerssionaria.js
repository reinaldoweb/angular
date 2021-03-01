"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concerssionaria = /** @class */ (function () {
    function Concerssionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concerssionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concerssionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concerssionaria;
}());
exports.default = Concerssionaria;
