import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Memoria } from './memoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoriaService {

  private readonly API = 'http://localhost:3000/memorias'
  constructor(private http: HttpClient) { }

  listar(): Observable<Memoria[]>{  //metodo para listar as memorias
    return this.http.get<Memoria[]>(this.API)
  }

  criar(memoria: Memoria): Observable<Memoria>{
    return this.http.post<Memoria>(this.API, memoria)
  }

  editar(memoria: Memoria): Observable<Memoria>{
    const url = `${this.API}/${memoria.id}`
    return this.http.put<Memoria>(url, memoria)
  }

  excluir(id: number):Observable<Memoria>{
    const url = `${this.API}/${id}`
    return this.http.delete<Memoria>(url)
  }

  buscarPorId(id: number):Observable<Memoria>{
    const url = `${this.API}/${id}`
    return this.http.get<Memoria>(url)
  }


}
