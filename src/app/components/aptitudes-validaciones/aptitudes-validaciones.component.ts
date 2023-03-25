import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/sevicios/portafolio.service';

@Component({
  selector: 'app-aptitudes-validaciones',
  templateUrl: './aptitudes-validaciones.component.html',
  styleUrls: ['./aptitudes-validaciones.component.css']
})
export class AptitudesValidacionesComponent implements OnInit {
  aptitudes: any;
 
  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.aptitudes=data.aptitudes;
    })
  }
  
}