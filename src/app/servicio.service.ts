import { Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {promise} from 'protractor';
import {reject} from 'q';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import {Router} from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { InjectFlags } from '@angular/core/src/di/injector';
import * as _ from 'lodash';
import {DocumentSnapshot} from '@firebase/firestore-types';
import {MatDialog}from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  usuarios: AngularFirestoreDocument<any>;
  usuario: Observable<any>;
  constructor(
    private afs:AngularFirestore,
    public router: Router,
    private dialog: MatDialog,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit(){
    
  }

  registerUser(email,pass){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginUser(email,pass){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  verificaUsuario(){
    var user = this.afAuth.auth.currentUser;
    user.sendEmailVerification().then(function(){
      console.log("Mensaje de confirmacion Enviado");
    }).catch(function(error){
      console.log(error);
    })
  }

}
