import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SotolPlataComponent } from './sotol-plata/sotol-plata.component';
import { SotolRusticoComponent } from './sotol-rustico/sotol-rustico.component';
import { SotolPlatinumComponent } from './sotol-platinum/sotol-platinum.component';
import { SotolReposadoComponent } from './sotol-reposado/sotol-reposado.component';
import { SotolAnejoComponent } from './sotol-anejo/sotol-anejo.component';
import { SotolOroComponent } from './sotol-oro/sotol-oro.component';
import { SotolH5Component } from './sotol-h5/sotol-h5.component';
import { SotolNuezComponent } from './sotol-nuez/sotol-nuez.component';
import { SotolChocolateComponent } from './sotol-chocolate/sotol-chocolate.component';

@NgModule({
  declarations: [SotolPlataComponent, SotolRusticoComponent, SotolPlatinumComponent, SotolReposadoComponent, SotolAnejoComponent, SotolOroComponent, SotolH5Component, SotolNuezComponent, SotolChocolateComponent],
  imports: [CommonModule],
  exports: [SotolPlataComponent, SotolRusticoComponent, SotolPlatinumComponent, SotolReposadoComponent, SotolAnejoComponent, SotolOroComponent, SotolH5Component, SotolNuezComponent, SotolChocolateComponent],
})
export class ProductosModule {}
