   import Carro from './Carro'
   import Pessoa from './Pessoa'
   import Concerssionaria from './Concerssionaria'


/*----Criar Carros-----*/

let carroA = new Carro('Prisma', 4)
let carroB = new Carro('KA', 4)
let carroC = new Carro('Gol', 2)
let carroD = new Carro('Onix', 4)

/*---Montar lista de carros*/

let listaDeCarros: Carro[] = [carroA, carroB, carroC, carroD]

let concessionaria = new Concerssionaria('Rua Potiguar',listaDeCarros )


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