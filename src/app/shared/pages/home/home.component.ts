import { Component } from '@angular/core';
import { HomeLocales, HomeStyles } from './home_locales_component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  HomeLocales = HomeLocales;
  HomeStyles = HomeStyles;
}
