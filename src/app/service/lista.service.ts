import { Lista } from './../model/lista';

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  listas!: Lista[];
  URL = 'http://localhost:3000/listas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  save(lista: Lista): Observable<Lista> {
    return this.httpClient.post<Lista>(
      this.URL,
      JSON.stringify(lista),
      this.httpOptions
    );
  }

  getListas(order: String = 'Asc', sort: String = 'id'): Observable<Lista[]> {
    return this.httpClient.get<Lista[]>(
      `${this.URL}?_sort=${sort}&_order=${order}`
    );
  }

  getLista(id: number): Observable<Lista> {
    return this.httpClient.get<Lista>(`${this.URL}/${id}`);
  }
  patch(lista: Lista): Observable<Lista> {
    return this.httpClient.patch<Lista>(
      `${this.URL}/${lista.id}`,
      JSON.stringify(lista),
      this.httpOptions
    );
  }
  update(lista: Lista): Observable<Lista> {
    return this.httpClient.put<Lista>(
      `${this.URL}/${lista.id}`,
      JSON.stringify(lista),
      this.httpOptions
    );
  }

  delete(id: Number): Observable<Lista> {
    return this.httpClient.delete<Lista>(`${this.URL}/${id}`);
  }
}
