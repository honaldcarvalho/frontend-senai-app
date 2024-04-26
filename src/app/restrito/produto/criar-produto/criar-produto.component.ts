import { Component } from '@angular/core';
import { Produto } from '../../../models/Produto.model';
import { ProdutoService } from '../../../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrl: './criar-produto.component.css'
})
export class CriarProdutoComponent {

  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _router: Router) { }

  cadastrar(): void {
    this.produto.id = this._produtoService.getTotal();
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0, "", "", "", 0);
        alert("Cadastro Efetuado com sucesso");
      },
      err => {
        alert("Erro ao Cadastrar");
      }
    );

    this._router.navigate(["restrito/produtos/listar"]);
  }
}
