import { Component } from '@angular/core';

@Component({
  selector: 'sotol-nuez',
  templateUrl: './sotol-nuez.component.html'
})
export class SotolNuezComponent {
  sotolNuez:boolean = false;
  transitionClass:boolean = false;
  toggleElment(){
    this.sotolNuez = !this.sotolNuez;
    this.transitionClass = true;
  }
}
