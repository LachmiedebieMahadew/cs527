import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <li>{{elements}}</li>
  `,
  styles: []
})
export class DumbComponent {
@Input() elements;

}
