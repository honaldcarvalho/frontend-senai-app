import { Component, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ItemVendaComponent } from '../item-venda/item-venda.component';
import {MatCardModule} from '@angular/material/card';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';

export interface Itens {
  descricao: string;
  valor: number;
  tipo: string;
  imagem: string;
}

@Component({
  selector: 'app-lista-itens',
  standalone: true,
  imports: [MatGridListModule,ItemVendaComponent,MatCardModule],
  templateUrl: './lista-itens.component.html',
  styleUrl: './lista-itens.component.css'
})

export class ListaItensComponent {

  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService, private _router: Router) { }

  ngOnInit(): void {
    this.listarProdutos();
  }
  
  @Input('secao') secao = '';
  itens: Itens[] = [
    {descricao: 'PC CORE I5 DE 5° GERAÇÃO', valor: 3500, imagem: '/assets/img/produtos/image3.png',tipo:'pc'},
    {descricao: 'PC RYZEN 7 3700xd', valor: 5800, imagem: '/assets/img/produtos/image4.png',tipo:'pc'},
    {descricao: 'NOTEBOOK ASUS PREDATOR', valor: 8500, imagem: '/assets/img/produtos/image9.png',tipo:'pc'},
    {descricao: 'PLCA DE VIDEO AMD 5800', valor: 1600, imagem: '/assets/img/produtos/image6.png',tipo:'componente'},
    {descricao: 'FONTE DE ENERGIA ATX', valor: 260, imagem: '/assets/img/produtos/image7.png',tipo:'componente'},
    {descricao: 'SSD KINGSTON 1Tb', valor: 590, imagem: '/assets/img/produtos/image8.png',tipo:'componente'},
  ];

  listarProdutos(): void {
    try {
      this._produtoService.getProdutos().subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
              return new Produto(
                item.id,
                item.descricao,
                item.imagem,
                item.tipo,
                item.valor
              );
            }
          )
        }
      )
    } catch (error) {
      console.log('deu ruim :(');
    }
  }
}
