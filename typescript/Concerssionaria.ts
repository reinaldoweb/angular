import Carro from './Carro'
export default class Concerssionaria{

  private endereco: string

  private listaDeCarros: Array<Carro>


  constructor(endereco: string, listaDeCarros: Array<Carro>){
      this.endereco = endereco
      this.listaDeCarros = listaDeCarros
  }



  public fornecerEndereco(){

      return this.endereco
  }

  public mostrarListaDeCarros(): Array<Carro>{

      return this.listaDeCarros

  }
}