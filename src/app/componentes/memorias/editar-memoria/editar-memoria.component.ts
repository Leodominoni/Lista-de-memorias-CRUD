import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Memoria } from '../memoria';
import { MemoriaService } from '../memoria.service';

@Component({
  selector: 'app-editar-memoria',
  templateUrl: './editar-memoria.component.html',
  styleUrls: ['./editar-memoria.component.css']
})
export class EditarMemoriaComponent implements OnInit {

  memoria: Memoria = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private service:MemoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((memoria) => {
      this.memoria = memoria
    })
  }

  editarMemoria(){
    this.service.editar(this.memoria).subscribe((memoria) => {
      this.router.navigate(['/listarMemoria'])
  })
  }

  cancelar(){
    this.router.navigate(['/listarMemoria'])
  }

}
