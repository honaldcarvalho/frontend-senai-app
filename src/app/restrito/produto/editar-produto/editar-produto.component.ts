import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../../models/Produto.model';
import { ProdutoService } from '../../../produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.css'
})
export class EditarProdutoComponent implements OnInit {

  public produtoId: number = 0;
  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => this.produtoId = params['id']);
  }

  ngOnInit(): void {
    this.carregarProduto();
  }

  carregarProduto(): void {
    this._produtoService.getProduto(this.produtoId).subscribe(
      (res: any) => {
        this.produto = new Produto(
          res[0].id,
          res[0].descricao,
          res[0].imagem,
          res[0].tipo,
          res[0].valor
        );
      }
    )
  }

  atualizar(id: number) {
    this._produtoService.atualizarProduto(id, this.produto).subscribe(
      produto => { this.produto = new Produto(0, "", "", "", 0) },
      err => { alert("Erro ao atualizar") }
    );
    this._router.navigate(["restrito/produtos/listar"]);
  }

}
