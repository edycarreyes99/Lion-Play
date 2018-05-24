import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';
import {MaterialModule} from '../../material.module';
import {ServicioService} from '../../servicio.service';
import {auth} from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService : ServicioService,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
