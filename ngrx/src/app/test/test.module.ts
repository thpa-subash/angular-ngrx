import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes:Routes=[
  {
    path:"test/databinding", component:DataBindingComponent
    
  }
];

@NgModule({
  declarations: [
 
  
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TestModule { }
