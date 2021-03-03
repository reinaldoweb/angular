"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoDao = void 0;
var Moto_1 = __importDefault(require("./Moto"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('Lógica de Insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('Lógica de update');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('Lógica delete');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Moto_1.default()];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
