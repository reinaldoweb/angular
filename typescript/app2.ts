class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

constructor(modelo: string, numeroDePortas: number){

    this.modelo = modelo
    this.numeroDePortas = numeroDePortas

}

    public acelerar(): void {

        this.velocidade = this.velocidade + 10 

    }

    public parar(): void{

        this.velocidade = 0

    }

    public velocidadeAtual(): number{

        return this.velocidade

    }

}

class Conceessionaria{

    

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

class Pessoa{


    private nome: string
    private carroPreferido: string
    private carro:any



    constructor(nome: string, carroPreferido: string){

        this.nome = nome
        this.carroPreferido = carroPreferido

    }



    /**
     * name
     */
    public dizerNome() {

       return this.nome 
        
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public comprarCarro(carro:Carro): void{

        return this.carro 

    }

    public dizerCarroQueTem(): Carro{

        return this.carro

    }
}



/*----Criar Carros-----*/

let carroA = new Carro('Prisma', 4)
let carroB = new Carro('KA', 4)
let carroC = new Carro('Gol', 2)
let carroD = new Carro('Onix', 4)

/*---Montar lista de carros*/

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC, carroD]

let concessionaria = new Conceessionaria('Rua Potiguar',listaDeCarros )


/**Exibir a lista de carros */

//console.log(concessionaria.mostrarListaDeCarros())


/** Comprar o carro */

let cliente = new Pessoa('Reinaldo', 'Prisma')


//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) =>{

    if(carro['modelo'] == cliente.dizerCarroPreferido()){

        //comprar o carro

        cliente.comprarCarro(carro)
    }

    //console.log(carro)
})

console.log(cliente.dizerCarroQueTem())