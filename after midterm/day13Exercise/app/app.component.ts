import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-smart></app-smart>
  <p [appIsVisible]="true">Text is Visible</p>
  <p appMakeBigger > Lachmie</p>
  <p>{{"string "|multiPipe:3}} <p>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
