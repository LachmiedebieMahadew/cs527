import { Component, OnInit, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <button  (click)= "decrement()">-</button> 
        {{counter}}
    <button (click)="increment()">+</button>
  `,
  styles: []
})
export class CounterComponent{
  ComponentCountervalue:number=0;
  @Input() counter:number; 
  decrement(){
    /*this.ComponentCountervalue-- */
    this.counter--;
  
  }
increment(){
  /*this.ComponentCountervalue++ */
  this.counter++;
}
}
