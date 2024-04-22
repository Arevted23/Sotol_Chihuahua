import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { HistoriaComponent } from './pages/paginas/historia/historia.component';
import { CertificacionesComponent } from './pages/paginas/certificaciones/certificaciones.component';
import { ProductosComponent } from './pages/paginas/productos/productos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'historia',
    component: HistoriaComponent
  },
  {
    path: 'certificacion',
    component: CertificacionesComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
