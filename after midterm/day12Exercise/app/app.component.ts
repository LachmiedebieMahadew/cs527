import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-counter counter=9></app-counter> <br><br>
  <app-counter counter=12></app-counter> <br><br>
  <app-counter counter=7></app-counter>`,
  styles: []
})
export class AppComponent {
  title = 'myApp';
}
