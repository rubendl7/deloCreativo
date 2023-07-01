import { Component, OnInit } from '@angular/core';
import { OfreceI } from 'src/app/modelos/ofrece.interface';
import { ServiceService } from 'src/app/servicios/service.service';


@Component({
  selector: 'app-app-ofrecemos',
  templateUrl: './app-ofrecemos.component.html',
  styleUrls: ['./app-ofrecemos.component.scss']
})


export class AppOfrecemosComponent implements OnInit {

  rweb = "https://www.delocreativo.com/";
  rbase = this.rweb + "delorec/videos/";
  rbase2 = this.rweb + "delorec/img/";
  ofrecemos!: Array<OfreceI>;

  constructor(private rdlsrv: ServiceService){ }

  ngOnInit(): void { 
    this.vePorDatos("delofrec");
  }

  vePorDatos(miMetodo: string){
    this.rdlsrv.dameDatos(miMetodo).subscribe(res => 
      {
        this.ofrecemos = res.Data;
      }
    );      
  }





}
