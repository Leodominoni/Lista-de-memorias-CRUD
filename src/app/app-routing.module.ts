import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarMemoriaComponent } from './componentes/memorias/criar-memoria/criar-memoria.component';
import { ListarMemoriaComponent } from './componentes/memorias/listar-memoria/listar-memoria.component';
import { ExcluirMemoriaComponent } from './componentes/memorias/excluir-memoria/excluir-memoria.component';
import { EditarMemoriaComponent } from './componentes/memorias/editar-memoria/editar-memoria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarMemoria',
    pathMatch: 'full'
  },
  {
    path: 'criarMemoria',
    component: CriarMemoriaComponent
  },
  {
    path: 'listarMemoria',
    component: ListarMemoriaComponent
  },
  {
    path: 'memorias/excluirMemoria/:id',
    component: ExcluirMemoriaComponent
  },
  {
    path: 'memorias/editarMemoria/:id',
    component: EditarMemoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
