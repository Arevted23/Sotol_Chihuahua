import { Component } from '@angular/core';
import { FooterLocales } from './footer_locales_component';
@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  FooterLocales = FooterLocales;
}
