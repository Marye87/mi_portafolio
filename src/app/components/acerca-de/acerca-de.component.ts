import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/sevicios/portafolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 
  acercade: any;
 
  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.acercade=data.acercade;
    })
  }
  
}