import { Component, OnInit } from '@angular/core';
import { ProductosI } from 'src/app/modelos/productos.interface';
import { ServiceService } from 'src/app/servicios/service.service';


@Component({
  selector: 'app-app-productos',
  templateUrl: './app-productos.component.html',
  styleUrls: ['./app-productos.component.scss']
})


export class AppProductosComponent implements OnInit {

  rweb = "https://www.delocreativo.com/";
  rbase = this.rweb + "delorec/img/";
  rbasev = this.rweb + "delorec/videos/";
  rbasea = this.rweb + "delorec/audios/";
  elvideo = "";
  elaudio = "";
  eldocto="https://www.delocreativo.com/delorec/doctos/Portafolio%20DISE%C3%91O%20DELO.pdf";

  lstProduccion!: Array<ProductosI>;
  
  pasa() {
    console.log("Hice click");
  }

  constructor(private rdlsrv: ServiceService){ }

  ngOnInit(): void { 
    this.vePorDatos1("deloprod");
  }

  vePorDatos1(miMetodo: string){
    this.rdlsrv.dameDatos(miMetodo).subscribe(res => 
      {
        this.lstProduccion = res.Data;
      }
    );      
  }

  
  PodCast(archivo: string) {
    if( archivo != "#") {
      let ubicado = this.rbasea + archivo;
      this.elaudio = ubicado;  
    }
  }

  ElVideo(archivo: string) {
    if( archivo != "#") {
      let ubicado = this.rbasev + archivo;
      this.elvideo = ubicado;
    }
  }



}
