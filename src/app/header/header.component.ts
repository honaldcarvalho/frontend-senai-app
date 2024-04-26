import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl : './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
