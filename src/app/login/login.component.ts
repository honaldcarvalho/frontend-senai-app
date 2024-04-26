import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  public isLogin = true;

  constructor(
    private formBuilder: FormBuilder,private router: Router, private loginService: LoginService
  ) {}

  formLogin = this.formBuilder.group({
    usuario: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
    senha: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
  });

  formRegistro = this.formBuilder.group({
    usuario: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
    senha: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
  });

  logar(): void {

    let usuario = this.formLogin.get('usuario')?.value;
    let senha = this.formLogin.get('senha')?.value;

    if(this.loginService.logar(usuario,senha)){
      alert("Logado com sucesso!");
      this.router.navigate(['restrito']);
    }else{
      alert("Usuario e(ou) senha invalido(s).");
    }
  }

  registrar(): void {
    alert('Registrado com sucesso!');
    this.isLogin = true;
  }

  registro(): void {
    this.isLogin = false;
  }

  login(): void {
    this.isLogin = true;
  }

  ver(): void {
    this.isLogin = true;
  }

}
