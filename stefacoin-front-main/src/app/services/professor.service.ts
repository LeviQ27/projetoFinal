import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem } from '../models/mensagem';
import { Professor } from '../models/professor';

const URL = 'http://localhost:3000/stefanini/professor';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  constructor(private httpClient: HttpClient) {}
  

  // #pegabandeira
  listar(filtro: Partial<Professor>): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(`${URL}`);
  }

  obter(filtro: Partial<Professor>): Observable<Professor[]> { 
    return this.httpClient.get<Professor[]>(`${URL}/:id`)
   }

  incluir(professor: Professor): Observable<Mensagem> {
    return this.httpClient.post<Mensagem>(URL, professor);
  }

  alterar(professor: Professor): Observable<Mensagem> {
    return this.httpClient.put<Mensagem>(URL, professor);
  }

  excluir(filtro: Partial<Professor>): Observable<Professor[]> { 
    return this.httpClient.delete<Professor[]>(`${URL}/:id`)
   }
}
