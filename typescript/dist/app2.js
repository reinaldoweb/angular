"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Conceessionaria = /** @class */ (function () {
    function Conceessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Conceessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Conceessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Conceessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    /**
     * name
     */
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        return this.carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/*----Criar Carros-----*/
var carroA = new Carro('Prisma', 4);
var carroB = new Carro('KA', 4);
var carroC = new Carro('Gol', 2);
var carroD = new Carro('Onix', 4);
/*---Montar lista de carros*/
var listaDeCarros = [carroA, carroB, carroC, carroD];
var concessionaria = new Conceessionaria('Rua Potiguar', listaDeCarros);
/**Exibir a lista de carros */
//console.log(concessionaria.mostrarListaDeCarros())
/** Comprar o carro */
var cliente = new Pessoa('Reinaldo', 'Prisma');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
    //console.log(carro)
});
console.log(cliente.dizerCarroQueTem());
