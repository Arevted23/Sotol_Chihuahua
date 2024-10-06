import { Component } from '@angular/core';
import { NavigationLocales } from './navbar_locales_component';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public active: boolean = false;
  setActive(): void {
    this.active = !this.active;
  }
  NavigationLocales = NavigationLocales
}
