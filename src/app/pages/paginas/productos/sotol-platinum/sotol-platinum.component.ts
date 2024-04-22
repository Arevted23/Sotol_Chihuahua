import { Component } from '@angular/core';

@Component({
  selector: 'sotol-platinum',
  templateUrl: './sotol-platinum.component.html'
})
export class SotolPlatinumComponent {
  sotolPlatinum: boolean = false;
  transitionClass:boolean = false;

  toggleElment(){
    this.sotolPlatinum = !this.sotolPlatinum;
    this.transitionClass = true;
  }
}
