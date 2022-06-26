import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtos!: Produto[];
  URL = 'http://localhost:3000/produtos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  save(produto: Produto): Promise<Produto | void> {
    return this.httpClient
      .post<Produto>(this.URL, JSON.stringify(produto), this.httpOptions)
      .toPromise();
  }

  getProdutos(
    order: String = 'Asc',
    sort: String = 'id'
  ): Promise<Produto[] | void> {
    return this.httpClient
      .get<Produto[]>(`${this.URL}?_sort=${sort}&_order=${order}`)
      .toPromise();
  }
  getProdutosAtivos(
    order: String = 'Asc',
    sort: String = 'id'
  ): Promise<Produto[] | void> {
    return this.httpClient
      .get<Produto[]>(`${this.URL}?ativo=true&_sort=${sort}&_order=${order}`)
      .toPromise();
  }

  getProduto(id: number): Promise<Produto | void> {
    return this.httpClient.get<Produto>(`${this.URL}/${id}`).toPromise();
  }
  patch(produto: Produto): Promise<Produto | void> {
    return this.httpClient
      .patch<Produto>(
        `${this.URL}/${produto.id}`,
        JSON.stringify(produto),
        this.httpOptions
      )
      .toPromise();
  }
  update(produto: Produto): Promise<Produto | void> {
    return this.httpClient
      .put<Produto>(
        `${this.URL}/${produto.id}`,
        JSON.stringify(produto),
        this.httpOptions
      )
      .toPromise();
  }

  delete(id: Number): Promise<Produto | void> {
    return this.httpClient.delete<Produto>(`${this.URL}/${id}`).toPromise();
  }

}
