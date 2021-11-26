import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterMainComponent } from '../counter-main/counter-main.component';
import { counterInterface } from '../model/counter.interface';
import { counterReducer } from '../reducer/counter.reducer';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter:number;
  count$!:Observable<counterInterface>;
  constructor(private store:Store<{counter:counterInterface}>) {
    this.counter=0;
    
   }

  ngOnInit(): void {
    // this.store.select('counter').subscribe((data)=>{
    //   this.count$=data.score;
    // })
    this.count$=this.store.select('counter');
    console.log(this.count$)
  }


}
