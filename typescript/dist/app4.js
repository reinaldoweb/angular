"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { ConcessionariaDao } from './ConcessionariaDao'
var Dao_1 = require("./Dao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
//let dao: ConcessionariaDao = new ConcessionariaDao()
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
var dao5 = new Dao_1.Dao();
//dao.inserir(concessionaria);
//let dao2: PessoaDao = new PessoaDao() 
//dao2.atualizar(pessoa);
//let dao3: CarroDao = new CarroDao();
//let carro: Carro = new Carro('', 2); 
//dao3.inserir(carro);
//let dao4: MotoDao = new MotoDao()
//let moto: Moto = new Moto();
//dao4.selecionarTodos();
dao5.inserir(concessionaria);
