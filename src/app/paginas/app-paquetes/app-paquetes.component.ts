import { Component } from '@angular/core';
import { PaquetesI } from 'src/app/modelos/paquetes.interface';
import { ServiceService } from 'src/app/servicios/service.service';


@Component({
  selector: 'app-app-paquetes',
  templateUrl: './app-paquetes.component.html',
  styleUrls: ['./app-paquetes.component.scss']
})


export class AppPaquetesComponent {


  rweb = "https://www.delocreativo.com/";
  rbase = this.rweb + "delorec/img/";

  lstProduccion!: Array<PaquetesI>;

  constructor(private rdlsrv: ServiceService){ 
    
  }

  ngOnInit(): void { 
    this.vePorDatos1("delopaq");
  }

  vePorDatos1(miMetodo: string){
    this.rdlsrv.dameDatos(miMetodo).subscribe(res => 
      {
        this.lstProduccion = res.Data;
      }
    );      
  }

}
