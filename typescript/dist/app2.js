"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/*----Criar Carros-----*/
var carroA = new Carro_1.default('Prisma', 4);
var carroB = new Carro_1.default('KA', 4);
var carroC = new Carro_1.default('Gol', 2);
var carroD = new Carro_1.default('Onix', 4);
/*---Montar lista de carros*/
var listaDeCarros = [carroA, carroB, carroC, carroD];
var concessionaria = new Concessionaria_1.default('Rua Potiguar', listaDeCarros);
/**Exibir a lista de carros */
//console.log(concessionaria.mostrarListaDeCarros())
/** Comprar o carro */
var cliente = new Pessoa_1.default('Reinaldo', 'Prisma');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
    //console.log(carro)
});
console.log(cliente.dizerCarroQueTem());
