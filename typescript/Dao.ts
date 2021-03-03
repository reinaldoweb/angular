import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T>{

  nomeTabela: string = ''

  inserir(object: T): boolean {
    console.log('Lógica de Insert')
    return true
  }

  atualizar(object: T): boolean{
    console.log('Lógica de update')
    return true
  }
  remover(id: number): T{
    console.log('Lógica delete')
    return Object()
  }
  selecionar(id: number): T{
    console.log('lógica select')
    return Object();
  }
  selecionarTodos(): [T]{
    console.log('Lógica getAll')
    return Object()
  }

}