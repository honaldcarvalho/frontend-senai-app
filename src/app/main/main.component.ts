import { Component } from '@angular/core';
import { ListaItensComponent } from '../lista-itens/lista-itens.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ListaItensComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
