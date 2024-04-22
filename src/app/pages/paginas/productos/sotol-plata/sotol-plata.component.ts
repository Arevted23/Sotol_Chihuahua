import { Component } from '@angular/core';

@Component({
  selector: 'sotol-plata',
  templateUrl: './sotol-plata.component.html'
})
export class SotolPlataComponent {
  sotolPlata: boolean = false;
  transitionClass:boolean = false;

  toggleElment(){
    this.sotolPlata = !this.sotolPlata;
    this.transitionClass = true;
  }
}
