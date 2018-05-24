import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AccountProfileComponent,
    AltosRequisitosComponent,
    MediosRequisitosComponent,
    BajosRequisitosComponent,
    AndroidComponent,
    AyudaComponent,
    BusquedaComponent,
    ContactoComponent,
    DescargasComponent,
    FooterComponent,
    InicioComponent,
    IosComponent,
    NavbarComponent,
    PcComponent,
    PlayStation2Component,
    PlayStation3Component,
    PlayStation4Component,
    PspComponent,
    UtilidadesComponent,
    Xbox360Component,
    FavoritosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
