import { Component } from '@angular/core';

@Component({
  selector: 'sotol-h5',
  templateUrl: './sotol-h5.component.html'
})
export class SotolH5Component {
  sotolH5:boolean = false;
  transitionClass:boolean = false;
  toggleElment(){
    this.sotolH5 = !this.sotolH5;
    this.transitionClass = true;
  }
}
