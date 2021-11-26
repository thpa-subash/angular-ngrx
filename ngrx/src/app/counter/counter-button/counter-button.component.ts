import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementAction, incrementAction, resetAction } from '../action/counterAction';
import { counterInterface } from '../model/counter.interface';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store:Store<{counter:counterInterface}>) { }

  ngOnInit(): void {
  }
  onIncrement(){
    this.store.dispatch(incrementAction())
  }
  onDecrement(){
    this.store.dispatch(decrementAction())

  }
  onReset(){
    this.store.dispatch(resetAction())

  }

}
