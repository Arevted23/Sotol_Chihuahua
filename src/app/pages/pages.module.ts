import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './paginas/historia/historia.component';



@NgModule({
  declarations: [
    HistoriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HistoriaComponent
  ]

})
export class PagesModule { }
