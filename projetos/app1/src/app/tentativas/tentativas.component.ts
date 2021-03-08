import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public CoracaoVazio: string = '/assets/coracao_vazio.png'
  public CoracaoCheio: string = '/assets/coracao_cheio.png'

  constructor() { }

  ngOnInit(): void {
  }

}
