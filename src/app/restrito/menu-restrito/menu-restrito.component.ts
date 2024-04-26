import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
//import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrls: ['./menu-restrito.component.css']
})
export class MenuRestritoComponent {
  showMenu: boolean = false;
  constructor( private _router: Router,
    public _loginService:LoginService
  ){}  

  logout(){
    localStorage.clear();
    this.showMenu = this._loginService.ver();
    this._router.navigate(['/login']);
  }
}
