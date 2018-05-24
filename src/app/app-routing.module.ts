import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountProfileComponent } from './componentes/account-profile/account-profile.component';
import { AltosRequisitosComponent } from './componentes/altos-requisitos/altos-requisitos.component';
import { MediosRequisitosComponent } from './componentes/medios-requisitos/medios-requisitos.component';
import { BajosRequisitosComponent } from './componentes/bajos-requisitos/bajos-requisitos.component';
import { AndroidComponent } from './componentes/android/android.component';
import { AyudaComponent } from './componentes/ayuda/ayuda.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DescargasComponent } from './componentes/descargas/descargas.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { IosComponent } from './componentes/ios/ios.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PcComponent } from './componentes/pc/pc.component';
import { PlayStation2Component } from './componentes/play-station2/play-station2.component';
import { PlayStation3Component } from './componentes/play-station3/play-station3.component';
import { PlayStation4Component } from './componentes/play-station4/play-station4.component';
import { PspComponent } from './componentes/psp/psp.component';
import { UtilidadesComponent } from './componentes/utilidades/utilidades.component';
import { Xbox360Component } from './componentes/xbox360/xbox360.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { AboutComponent } from './componentes/about/about.component';
import {LoginComponent} from './componentes/login/login.component';

const routes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'login',component: LoginComponent},
  {path: 'account',component: AccountProfileComponent},
  {path: 'android',component: AndroidComponent},
  {path: 'ayuda',component: AyudaComponent},
  {path: 'busqueda',component: BusquedaComponent},
  {path: 'contacto',component: ContactoComponent},
  {path: 'descargas',component: DescargasComponent},
  {path: 'ios',component: IosComponent},
  {path: 'pc',component: PcComponent},
  {path: 'ps2',component: PlayStation2Component},
  {path: 'ps3',component: PlayStation3Component},
  {path: 'ps4',component: PlayStation4Component},
  {path: 'psp',component: PspComponent},
  {path: 'utilidades',component: UtilidadesComponent},
  {path: 'xbox360',component: Xbox360Component},
  {path: 'favoritos',component: FavoritosComponent},
  {path: 'about',component: AboutComponent},
  {path: 'altosRequisitos',component: AltosRequisitosComponent},
  {path: 'mediosRequisitos',component: MediosRequisitosComponent},
  {path: 'bajosRequisitos',component: BajosRequisitosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
