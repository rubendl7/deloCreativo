import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeI } from '../modelos/datos.interface';


@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  solicitud!: MensajeI;
  cRutSrv="https://www.delocreativo.com/rdlactiv/servicios/";
  cTkn = "eyJ0eXAiOiJK0V1QiRCJhbGcJOMJIUzIrNiJ9.eyJleHAUOjE2CDg2MTU2ODAsImF1ZCI6IjVjYjExNDAzMGUyMTdjZmI2ZDY1MzQxOTczODI2ZmM1MzY4YmY3M2EiLCJkYXRhIjp7ImlkIjoxLCJuYW1lIjoicnViZW5jaXRvIn19.l_bCB5C5rIaoxLar3VnUIuAhjKYNWrHvRDSk9";

  httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Headers' : 'Content-Type, Access-Control-Allow-Headers ',
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + this.cTkn
      })
  };

  constructor(private http: HttpClient) { }

  dameDatos(miCve: string):Observable<any>  {
    this.solicitud = { req: miCve , pnom: "", peml: "", ptxt: ""};
    const body = JSON.stringify(this.solicitud);
    return this.http.post<any>(this.cRutSrv, body, this.httpOptions );  
  }

  salvaMensaje(nuevoMensaje: any):Observable<any>  {
    this.solicitud = { req: 'mndanoti', pnom: nuevoMensaje.nombre, peml: nuevoMensaje.correo, ptxt: nuevoMensaje.mensaje};
    const body = JSON.stringify(this.solicitud);
    return this.http.post<MensajeI>(this.cRutSrv, body, this.httpOptions );  
  }  

}
