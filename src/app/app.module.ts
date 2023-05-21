import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarMemoriaComponent } from './componentes/memorias/criar-memoria/criar-memoria.component';
import { ListarMemoriaComponent } from './componentes/memorias/listar-memoria/listar-memoria.component';
import { MemoriaComponent } from './componentes/memorias/memoria/memoria.component';
import { ExcluirMemoriaComponent } from './componentes/memorias/excluir-memoria/excluir-memoria.component';
import { EditarMemoriaComponent } from './componentes/memorias/editar-memoria/editar-memoria.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarMemoriaComponent,
    ListarMemoriaComponent,
    MemoriaComponent,
    ExcluirMemoriaComponent,
    EditarMemoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
