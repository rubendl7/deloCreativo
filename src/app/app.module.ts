import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './compartido/componentes/encabezado/encabezado.component';
import { PiedepagComponent } from './compartido/componentes/piedepag/piedepag.component';
import { AppHolaComponent } from './paginas/app-hola/app-hola.component';
import { AppOfrecemosComponent } from './paginas/app-ofrecemos/app-ofrecemos.component';
import { AppPaquetesComponent } from './paginas/app-paquetes/app-paquetes.component';
import { AppProductosComponent } from './paginas/app-productos/app-productos.component';
import { AppSentidosComponent } from './paginas/app-sentidos/app-sentidos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiedepagComponent,
    AppHolaComponent,
    AppOfrecemosComponent,
    AppPaquetesComponent,
    AppProductosComponent,
    AppSentidosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
