import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './paginas/historia/historia.component';
import { CertificacionesComponent } from './paginas/certificaciones/certificaciones.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ProductosModule } from './paginas/productos/productos.module';




@NgModule({
  declarations: [
    HistoriaComponent,
    CertificacionesComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosModule

  ],
  exports:[
    HistoriaComponent
  ]

})
export class PagesModule { }
