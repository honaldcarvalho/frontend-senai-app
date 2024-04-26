import { Component, Input } from '@angular/core';
import { MaterialModule } from '../material.module';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-item-venda',
  standalone: true,
  imports: [MatGridListModule, MaterialModule,MatCardModule],
  templateUrl: './item-venda.component.html',
  styleUrl: './item-venda.component.css'
})

export class ItemVendaComponent {
  @Input('descricao') descricao = '';
  @Input('valor') valor = '';
  @Input('tipo') tipo = '';
  @Input('imagem') imagem = '';
}
