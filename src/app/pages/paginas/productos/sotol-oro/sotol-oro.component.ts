import { Component } from '@angular/core';

@Component({
  selector: 'sotol-oro',
  templateUrl: './sotol-oro.component.html'
})
export class SotolOroComponent {
  sotolOro: boolean = false;
  transitionClass:boolean = false;

  toggleElment(){
    this.sotolOro = !this.sotolOro;
    this.transitionClass = true;
  }
}
