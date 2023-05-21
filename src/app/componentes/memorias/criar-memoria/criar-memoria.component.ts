import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Memoria } from '../memoria';
import { MemoriaService } from '../memoria.service';


@Component({
  selector: 'app-criar-memoria',
  templateUrl: './criar-memoria.component.html',
  styleUrls: ['./criar-memoria.component.css']
})
export class CriarMemoriaComponent implements OnInit {

  memoria : Memoria = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  }

  constructor(
    private service: MemoriaService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  criarMemoria(){
    this.service.criar(this.memoria).subscribe(() => {
      this.router.navigate(['/listarMemoria'])
    })
  }

  cancelarMemoria(){
    this.router.navigate(['/listarMemoria'])
  }

}
