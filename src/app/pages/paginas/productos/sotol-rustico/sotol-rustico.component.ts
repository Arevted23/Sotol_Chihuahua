import { Component } from '@angular/core';

@Component({
  selector: 'sotol-rustico',
  templateUrl: './sotol-rustico.component.html'
})
export class SotolRusticoComponent {
  sotolRustico: boolean = false;
  transitionClass:boolean = false;

  toggleElment(){
    this.sotolRustico = !this.sotolRustico;
    this.transitionClass = true;
  }
}
