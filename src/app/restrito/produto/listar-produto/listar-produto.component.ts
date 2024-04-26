import { Component } from '@angular/core';
import { ProdutoService } from '../../../produto.service';
import { Router, RouterLink } from '@angular/router';
import { Produto } from '../../../models/Produto.model';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrl: './listar-produto.component.css'
})
export class ListarProdutoComponent {
  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService, private _router: Router) { }

  ngOnInit(): void {
    console.log('INIT');
    this.listarProdutos();
    //this._loginService.setMostraMenu(false);
  }

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

  excluir(id: number) {

    this._produtoService.removerProduto(id).subscribe(
      produto => {
        this.listarProdutos();
      },
      err => { alert("Erro ao Excluir") }
    );

    this._router.navigate(["/restrito/lista"]);

  }
}
