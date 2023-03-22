import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AptitudesValidacionesComponent } from './components/aptitudes-validaciones/aptitudes-validaciones.component';
import { LogrosComponent } from './components/logros/logros.component';
import { PortafolioService } from './sevicios/portafolio.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    AptitudesValidacionesComponent,
    LogrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    //AppRoutingModule,
  ],
  providers: [PortafolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
