import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestritoComponent } from './restrito/restrito.component';
import { MenuRestritoComponent } from './restrito/menu-restrito/menu-restrito.component';
import { MaterialModule } from './material.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ListarProdutoComponent } from './restrito/produto/listar-produto/listar-produto.component';
import { CriarProdutoComponent } from './restrito/produto/criar-produto/criar-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarProdutoComponent } from './restrito/produto/editar-produto/editar-produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuRestritoComponent,
    RestritoComponent,
    ListarProdutoComponent,
    CriarProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
