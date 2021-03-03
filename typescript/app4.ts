//import { ConcessionariaDao } from './ConcessionariaDao'
import { Dao } from './Dao';
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa';

//import { PessoaDao } from './PessoaDao'
//import { CarroDao } from './CarroDao';
import Carro from './Carro';
//import { MotoDao } from './MotoDao';
import Moto from './Moto';

//let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('', '');

let dao5: Dao<Concessionaria> = new Dao<Concessionaria>();

//dao.inserir(concessionaria);


//let dao2: PessoaDao = new PessoaDao() 

//dao2.atualizar(pessoa);

//let dao3: CarroDao = new CarroDao();
//let carro: Carro = new Carro('', 2); 

//dao3.inserir(carro);

//let dao4: MotoDao = new MotoDao()
//let moto: Moto = new Moto();

//dao4.selecionarTodos();

dao5.inserir(concessionaria)