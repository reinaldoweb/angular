import { DaoInterface } from './DaoInterface'
import Carro from './Carro'

export class CarroDao implements DaoInterface {

  nomeTabela: string = 'tb_carro'

  inserir(object: Carro): boolean {
    console.log('Lógica de Insert')
    return true
  }

  atualizar(object: Carro): boolean {
    console.log('Lógica de update')
    return true
  }
  remover(id: number): Carro {
    console.log('Lógica delete')
    return new Carro('', '')
  }
  selecionar(id: number): Carro {
    console.log('lógica select')
    return new Carro('', '');
  }
  selecionarTodos(): [any] {
    console.log('Lógica getAll')
    return [new Carro('', '')]
  }

}