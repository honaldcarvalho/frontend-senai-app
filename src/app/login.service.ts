import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private _router: Router) { }

  generateRandomString(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

  logar(usuario: string | null | undefined, senha: string | null | undefined): boolean {

    let generateHash = this.generateRandomString(12);

    if((usuario != undefined && usuario == 'admin') && senha != undefined && senha == '123456'){
      localStorage.setItem('token',generateHash);
      return true;
    }
    return false;
  }

  ver(): boolean {

    if(localStorage.getItem('token') != undefined){
      return true;
    }
    return false;

  }


}
