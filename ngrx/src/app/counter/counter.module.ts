import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterMainComponent } from './counter-main/counter-main.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {
    path:'counter', component:CounterMainComponent
  }
]



@NgModule({
  declarations: [
    CounterOutputComponent,
    CounterMainComponent,
    CounterButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CounterModule { }
