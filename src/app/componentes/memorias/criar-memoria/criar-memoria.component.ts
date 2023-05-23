import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { MemoriaService } from '../memoria.service';


@Component({
  selector: 'app-criar-memoria',
  templateUrl: './criar-memoria.component.html',
  styleUrls: ['./criar-memoria.component.css']
})
export class CriarMemoriaComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: MemoriaService,
    private router:Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['',Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo 1']
    })
  }

  criarMemoria(){
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarMemoria'])
      })
    }
  }

  cancelarMemoria(){
    this.router.navigate(['/listarMemoria'])
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
