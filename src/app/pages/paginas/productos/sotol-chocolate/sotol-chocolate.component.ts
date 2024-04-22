import { Component } from '@angular/core';

@Component({
  selector: 'sotol-chocolate',
  templateUrl: './sotol-chocolate.component.html'
})
export class SotolChocolateComponent {
  sotolChocolate:boolean = false;
  transitionClass:boolean = false;
  toggleElment(){
    this.sotolChocolate = !this.sotolChocolate;
    this.transitionClass = true;
  }
}
