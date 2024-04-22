import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './paginas/historia/historia.component';
import { CertificacionesComponent } from './paginas/certificaciones/certificaciones.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ProductosModule } from './paginas/productos/productos.module';
import { MixologiaHomeComponent } from './paginas/mixologia/mixologia-home/mixologia-home.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';




@NgModule({
  declarations: [
    HistoriaComponent,
    CertificacionesComponent,
    ProductosComponent,
    ContactoComponent,

  ],
  imports: [
    CommonModule,
    ProductosModule,
  ],
  exports:[

  ]

})
export class PagesModule { }
