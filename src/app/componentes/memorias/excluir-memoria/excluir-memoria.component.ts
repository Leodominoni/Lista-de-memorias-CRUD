import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Memoria } from '../memoria';
import { MemoriaService } from '../memoria.service';


@Component({
  selector: 'app-excluir-memoria',
  templateUrl: './excluir-memoria.component.html',
  styleUrls: ['./excluir-memoria.component.css']
})
export class ExcluirMemoriaComponent implements OnInit {

  memoria: Memoria = {
    id: 0,
    conteudo:  '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: MemoriaService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((memoria) => {
      this.memoria = memoria
    })
  }

  excluirMemoria(){
    if(this.memoria.id){
      this.service.excluir(this.memoria.id).subscribe(()=>{
        this.router.navigate(['/listarMemoria'])
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarMemoria'])
  }

}
