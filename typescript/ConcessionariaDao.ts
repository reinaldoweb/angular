import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {

  nomeTabela: string = 'tb_concessionaria'

  inserir(object: Concessionaria): boolean {
    console.log('Lógica de Insert')
    return true
  }

  atualizar(object: Concessionaria): boolean{
    console.log('Lógica de update')
    return true
  }
  remover(id: number): Concessionaria{
    console.log('Lógica delete')
    return new Concessionaria('',[])
  }
  selecionar(id: number): Concessionaria{
    console.log('lógica select')
    return new Concessionaria('',[]);
  }
  selecionarTodos(): [any]{
    console.log('Lógica getAll')
    return [new Concessionaria('', [])]
  }

}