import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModuleTsComponent } from './app-routing.module.ts/app-routing.module.ts.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AptitudesValidacionesComponent } from './components/aptitudes-validaciones/aptitudes-validaciones.component';
import { LogrosComponent } from './components/logros/logros.component';
import { PortafolioService } from './sevicios/portafolio.service'
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './components/registro/registro.component';
import { BotonComponent } from './components/boton/boton.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    AptitudesValidacionesComponent,
    LogrosComponent,
    RegistroComponent,
    BotonComponent,
    EducacionComponent,
    AboutComponent,
    AppRoutingModuleTsComponent,
  
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
	  
  ],
  providers: [PortafolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
