import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  produto?: Produto;
  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getTotal(page: number) {

    return new Promise((resolve, reject) => {
      const headers = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) };
      let result = this.httpClient.post<Produto>(`${this.url}/produtos`, { 'access_token': localStorage.getItem('token'), 'page': page }, headers);

      result.subscribe({
        next(response) {
          resolve(response);
        },
        error(err) {
          reject(err);
        },
      });

    })

  }

  getProdutos(page: number) {

    return new Promise((resolve, reject) => {
      const headers = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) };
      let result = this.httpClient.post<Produto>(`${this.url}/produtos`, { 'access_token': localStorage.getItem('token'), 'page': page }, headers);

      result.subscribe({
        next(response) {
          resolve(response);
        },
        error(err) {
          reject(err);
        },
      });

    })

  }

  async associateProduto(produtoID: string, produtoInfo: string) {

    return new Promise((resolve, reject) => {
      const headers = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) };

      let body = {
        "produtoInfo": produtoInfo,
        "produtoID": produtoID
      };

      let result = this.httpClient.post<any>('/rest/produto/associate', body, headers);

      result.subscribe({
        next(response) {
          //console.log(response);
          resolve(response);
        },
        error(err) {
          //console.log(err);
          reject(err);
        },
      });
    })
  }

  async dissasociateProduto(produtoID: string) {

    return new Promise((resolve, reject) => {
      const headers = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) };

      let body = {
        "produtoID": produtoID
      };

      let result = this.httpClient.post<any>('/rest/produto/dissassociate', body, headers);

      result.subscribe({
        next(response) {
          //console.log(response);
          resolve(response);
        },
        error(err) {
          //console.log(err);
          reject(err);
        },
      });
    })
  }

  getProduto(id: number) {
    const params = new HttpParams({ fromString: `id=${id}` });
    return new Promise((resolve, reject) => {

      let result = this.httpClient.get<Produto>('/rest/teste/view', { responseType: 'json', params });

      result.subscribe({
        next(response) {
          resolve(response);
        },
        error(err) {
          reject(err);
        },
        complete() { console.log('Completed'); }
      });

    })
  }

}