import { Lista } from '../model/lista';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  listas!: Lista[];
  URL = 'http://localhost:3000/itens';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  save(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(
      this.URL,
      JSON.stringify(item),
      this.httpOptions
    );
  }

  async TemItens(listaId: Number): Promise<boolean> {
    let itens = await this.httpClient
      .get<Item[]>(`${this.URL}?listaId=${listaId}`)
      .toPromise();
    if (itens!.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  getItensByListaId(
    listaId: Number,
    order: String = 'Asc',
    sort: String = 'id'
  ): Observable<Item[]> {
    return this.httpClient.get<Item[]>(
      `${this.URL}?listaId=${listaId}&_sort=${sort}&_order=${order}`
    );
  }

  patch(item: Item): Observable<Item> {
    return this.httpClient.patch<Item>(
      `${this.URL}/${item.id}`,
      JSON.stringify(item),
      this.httpOptions
    );
  }
  update(item: Item): Observable<Item> {
    return this.httpClient.put<Item>(
      `${this.URL}/${item.id}`,
      JSON.stringify(item),
      this.httpOptions
    );
  }

  delete(id: Number): Observable<Item> {
    return this.httpClient.delete<Item>(`${this.URL}/${id}`);
  }
}
