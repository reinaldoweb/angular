import { DaoInterface } from './DaoInterface'
import Moto from './Moto'

export class MotoDao implements DaoInterface {

  nomeTabela: string = 'tb_concessionaria'

  inserir(object: Moto): boolean {
    console.log('Lógica de Insert')
    return true
  }

  atualizar(object: Moto): boolean{
    console.log('Lógica de update')
    return true
  }
  remover(id: number): Moto{
    console.log('Lógica delete')
    return new Moto()
  }
  selecionar(id: number): Moto{
    console.log('lógica select')
    return new Moto();
  }
  selecionarTodos(): [any]{
    console.log('Lógica getAll')
    return [new Moto()]
  }

}