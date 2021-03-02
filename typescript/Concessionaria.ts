import { ConcessionariaInterface } from './ConcessionariaInterface'
import Carro from './Carro'
export default class Concessionaria implements ConcessionariaInterface {

    private endereco: string

    private listaDeCarros: Array<Carro>


    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco() {

        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {

        return this.listaDeCarros

    }

    public fornecerHorarioDeFuncionamento(): string {
        return 'De segunda a sexta-feria das 8:00 às 18:00 e Sábado das 08:00 as 12:00'

    }
}