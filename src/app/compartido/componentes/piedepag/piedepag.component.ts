import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactoI } from 'src/app/modelos/contact.interface';
import { ServiceService } from 'src/app/servicios/service.service';


@Component({
  selector: 'app-piedepag',
  templateUrl: './piedepag.component.html',
  styleUrls: ['./piedepag.component.scss']
})


export class PiedepagComponent  implements OnInit {

  hoy = new Date();
  miYear = this.hoy.getFullYear();

  respuesta: string = "";
  profileForm!: FormGroup;
  response!: Response;
  rslEnvio: string = "";

  rweb = "https://www.delocreativo.com/";
  rbase = this.rweb + "delorec/img/";

  datos = {} as ContactoI;
  dtsCont!: Array<ContactoI>;

  constructor(private rdlsrv: ServiceService){ }

  ngOnInit(): void { 
    this.vePorDatos("deloconta");
    this.profileForm = this.inicializaForma();
  }

  vePorDatos(miMetodo: string){
    this.rdlsrv.dameDatos(miMetodo).subscribe(res => { 
      this.dtsCont = res.Data; 
      this.datos = this.dtsCont[0];
    }
    );      
  }

  inicializaForma(): FormGroup {
    return new FormGroup ({
      nombre: new FormControl('', Validators.minLength(5) ),
      correo: new FormControl('', [ Validators.required, Validators.email]),
      mensaje: new FormControl('')
    })
  }

  onSubmit() { 
    this.onSavedForm(); 
  }

  onResetForm(){
    this.profileForm.reset();
  }  
  
  onSavedForm(){
    if (this.profileForm.valid){
      console.log(this.profileForm.value);
    }
  }  
  
}
