import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixologiaHomeComponent } from './mixologia-home/mixologia-home.component';



@NgModule({
  declarations: [
    MixologiaHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MixologiaHomeComponent
  ]
})
export class MixologiaModule { }
