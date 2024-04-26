import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlideComponent } from '../slide/slide.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,MainComponent,SlideComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
