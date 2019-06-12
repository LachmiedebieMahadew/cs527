import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
  Fruits:
<ul><app-dumb *ngFor="let i of myArray" [elements]="i"></app-dumb></ul>
  `,
  styles: []
})
export class SmartComponent {
 myArray:string[]=["Apple","Grape","Strawberry"];

}
