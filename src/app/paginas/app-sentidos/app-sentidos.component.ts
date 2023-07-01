import { Component } from '@angular/core';
import { Sentidos1I } from 'src/app/modelos/sentidos1.interface';
import { Sentidos2I } from 'src/app/modelos/sentidos2.interface';
import { ServiceService } from 'src/app/servicios/service.service';


@Component({
  selector: 'app-app-sentidos',
  templateUrl: './app-sentidos.component.html',
  styleUrls: ['./app-sentidos.component.scss']
})


export class AppSentidosComponent {
  
  rweb = "https://www.delocreativo.com/";
  rbase = this.rweb + "delorec/img/";
  
  sOffLine!: Array<Sentidos1I>;
  sOnLine!: Array<Sentidos2I>;

  constructor(private rdlsrv: ServiceService){ }

  ngOnInit(): void { 
    this.vePorDatos1("delosen1");
    this.vePorDatos2("delosen2");
  }

  vePorDatos1(miMetodo: string){
    this.rdlsrv.dameDatos(miMetodo).subscribe(res => 
      {
        this.sOffLine = res.Data;
      }
    );      
  }

  vePorDatos2(miMetodo: string){
    this.rdlsrv.dameDatos(miMetodo).subscribe(res => 
      {
        this.sOnLine = res.Data;
      }
    );      
  }


}
