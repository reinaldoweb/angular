import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3


  constructor() {
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
    // console.log(this.resposta)
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta!')

      //trocar pergunta da jogada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      //Atualiza o objeto redadafrase
      this.atualizaRodada()
    } else {
      //Diminuir a varivael tentativas
      this.tentativas--
      if(this.tentativas === -1){
        alert('Você já utilizou todas as suas tentivas!')
      }
    }

  }

  public atualizaRodada(): void {

    //define frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]

    //limpar a resposta
    this.resposta = ''


  }



}
