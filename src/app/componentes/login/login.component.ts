import { Component, OnInit } from '@angular/core';

import {ServicioService} from '../../servicio.service';
import {Router} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public username: string;
  public nombre: string;
  public apellido: string;
  public edad: number;
  public sexo: string;
  public profilePhoto: string;
  public telefono: string;

  constructor(
    public servicio: ServicioService,
    public router: Router,
    public navbar: NavbarComponent,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    var user = this.afAuth.auth.currentUser;
    console.log("estado de verificacion del usuario: "+user.emailVerified);
  }

  register(){
    this.servicio.registerUser(this.email,this.password)
    .then((res)=>{
      this.servicio.verificaUsuario();
      this.router.navigate(['/']);
    }).catch((err)=>{
      console.log(err);
    })
  }

  login(){
    this.servicio.loginUser(this.email,this.password)
    .then((res)=>{
      this.router.navigate(["/"]);
    }).catch((err)=>{
      console.log(err);
    })
  }
}
