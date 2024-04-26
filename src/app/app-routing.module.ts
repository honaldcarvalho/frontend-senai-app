import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';  
import { CriarProdutoComponent } from './restrito/produto/criar-produto/criar-produto.component';
import { ListarProdutoComponent } from './restrito/produto/listar-produto/listar-produto.component';
import { EditarProdutoComponent } from './restrito/produto/editar-produto/editar-produto.component';
import { GuardGuard } from './guard.guard';
import { RestritoComponent } from './restrito/restrito.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'GAMEMANIA - Login' },
  { path: '', component: HomeComponent, title: 'GAMEMANIA - Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'restrito', component: RestritoComponent, title: '[RESTRITO]', canActivate: [GuardGuard],
    children: [
      {
        path: 'produtos', children: [
          { path: '', component: ListarProdutoComponent, title: 'GAMEMANIA - Lista de Produtos' },
          { path: 'listar', component: ListarProdutoComponent, title: 'GAMEMANIA - Lista de Produtos' },
          { path: 'cadastro', component: CriarProdutoComponent, title: 'GAMEMANIA - Criar Produto' },
          { path: 'editar/:id', component: EditarProdutoComponent, title: 'GAMEMANIA - Editar Produto' },
        ]
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }