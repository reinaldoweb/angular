export class Coracao{ //Trasforada em modulo com export
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string = '/assets/coracao_cheio.png',
    public urlCoracaoVazio: string = '/assets/coracao_vazio.png'

  ){}//constructor

  public exibeCoracao():string{
    if(this.cheio){
      return this.urlCoracaoCheio
    }else{
      this.urlCoracaoVazio
    }
  }
}//class
