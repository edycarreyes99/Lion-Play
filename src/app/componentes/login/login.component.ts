import { Component, OnInit } from '@angular/core';

import { ServicioService } from '../../servicio.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';


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
  public currentUser: any;
  public emailVerified = false;

  constructor(
    public servicio: ServicioService,
    public router: Router,
    public navbar: NavbarComponent,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.servicio.getAuth().subscribe(user => {
      if (user) {
        console.log(user.email);
        console.log(user.uid);
      }
    })
  }

  register() {
    this.servicio.registerUser(this.email, this.password)
      .then((res) => {
        this.servicio.verificaUsuario();
        this.router.navigate(['/']);
        this.servicio.db.collection('Usuarios').doc(`${this.afAuth.auth.currentUser.uid}`).set({
          Nombre: 'Edycar',
          Apellido: 'Reyes',
          Correo: `${this.email}`,
          Contraseña: `${this.password}`,
          ProfilePhoto: 'http://www.hdfondos.eu/preview/get_photo/371623/1920/1080',
          UserName: 'edycarreyes99',
          Telefono: '+' + 505 + 8864 + 3494,
          UID: `${this.afAuth.auth.currentUser.uid}`,
          Edad: 18,
          emailVerified: this.afAuth.auth.currentUser.emailVerified,
          fechaRegistro: new Date('28 de mayo de 2018, 1:31:50 UTC-6'),
          Sexo: 'Masculino',
        })
      }).catch((err) => {
        console.log(err);
        switch (err.code) {
          case 'auth/email-already-in-use':
            console.log("Esta cuenta de Usuario ya Existe");
            break;
          case 'auth/weak-password':
            console.log("Debes Ingresar una Contraseña Valida");
            break;
          case 'auth/invalid-email':
            console.log("Debes ingresar un correo electronico Valido");
            break;
        }
      })
  }

  login() {
    this.servicio.loginUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(["/"]);
        if (this.afAuth.auth.currentUser.emailVerified) {
          this.servicio.db.collection('Usuarios').doc(`${this.afAuth.auth.currentUser.uid}`).update({
            emailVerified: this.afAuth.auth.currentUser.emailVerified
          })
        }
      }).catch((err) => {
        console.log(err);
      })
  }
}
