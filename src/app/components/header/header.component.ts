import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/sevicios/portafolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  miPortafolio:any;
    
  title: string = "Mi_App"; 

  constructor(
    private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      console.log(data);
    this.miPortafolio = data;
    });
  }
  toggleRegistrece(){
    this.miPortafolio.service.toggleRegistrece();
  }
}
