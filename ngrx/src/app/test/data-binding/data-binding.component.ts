import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  interploation:string="HEY I AM FROM INTERPOLATION :)"
  value:string="Subash Thapa"

  constructor() { }
  ngOnInit(): void {
  }

  onClick(event:any){
    console.log(event)
    this.value="You are gone :)"
  }

}
