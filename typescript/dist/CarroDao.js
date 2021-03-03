"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('Lógica de Insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('Lógica de update');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('Lógica delete');
        return new Carro_1.default('', '');
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new Carro_1.default('', '');
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Carro_1.default('', '')];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
