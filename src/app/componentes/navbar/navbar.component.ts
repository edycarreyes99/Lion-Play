import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';
import {MaterialModule} from '../../material.module';
import {ServicioService} from '../../servicio.service';
import {auth} from 'firebase/app';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin = false;
  public isVerified = false;
  public currentUser: any;

  constructor(
    public authService : ServicioService,
    public router: Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(user=>{
      if(user)
      {
        if(user.emailVerified)
        {
          this.isVerified = true;
        }else{
          this.isVerified = false;
        }
        this.isLogin=true;
        console.log("Hay Usuarios Activos");
        console.log(user.emailVerified);
        this.contenido(user)
      }else{
        this.isLogin=false;
        console.log("No hay Usuarios Activos");
      }
    })
  }

  contenido(user){
    this.currentUser = user;
    if(this.currentUser.emailVerified)
    {
      this.isVerified = true;
    }else{
      this.isVerified = false;
    }
  }

  cerrar(){
    this.authService.logout();
  }

}
