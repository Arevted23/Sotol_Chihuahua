import { Component } from '@angular/core';

@Component({
  selector: 'sotol-anejo',
  templateUrl: './sotol-anejo.component.html'
})
export class SotolAnejoComponent {
  sotolAnejo: boolean = false;
  transitionClass:boolean = false;

  toggleElment(){
    this.sotolAnejo = !this.sotolAnejo;
    this.transitionClass = true;
  }
}
