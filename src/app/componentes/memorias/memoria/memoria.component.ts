import { Component, Input, OnInit } from '@angular/core';
import { Memoria } from '../memoria';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {

  @Input() memoria: Memoria = {
    id: 0,
    conteudo: 'I love Star Wars',
    autoria: 'Leo',
    modelo: 'modelo2'
  }
  constructor() { }

  ngOnInit(): void {
  }

  larguraMemoria():string {
    if(this.memoria.conteudo.length >= 256){
      return 'memoria-g'
    }
    return  'memoria-p'
  }
}
