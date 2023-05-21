import { Component, OnInit } from '@angular/core';

import { Memoria } from '../memoria';
import { MemoriaService } from '../memoria.service';

@Component({
  selector: 'app-listar-memoria',
  templateUrl: './listar-memoria.component.html',
  styleUrls: ['./listar-memoria.component.css']
})
export class ListarMemoriaComponent implements OnInit {

  listaMemorias : Memoria[] = [];

  constructor(private service: MemoriaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaMemorias) => {
      this.listaMemorias = listaMemorias
    })
  }

}
