import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent {

  rweb = "https://www.delocreativo.com/";
  rbase = this.rweb + "delorec/img/";

}
