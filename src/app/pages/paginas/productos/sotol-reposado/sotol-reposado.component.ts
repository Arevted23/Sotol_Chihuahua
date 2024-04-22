import { Component } from '@angular/core';

@Component({
  selector: 'sotol-reposado',
  templateUrl: './sotol-reposado.component.html'
})
export class SotolReposadoComponent {
  sotolReposado: boolean = false;
  transitionClass:boolean = false;

  toggleElment(){
    this.sotolReposado = !this.sotolReposado;
    this.transitionClass = true;
  }
}
