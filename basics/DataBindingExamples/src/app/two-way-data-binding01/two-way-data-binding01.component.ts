import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding01',
  templateUrl: './two-way-data-binding01.component.html',
  styleUrls: ['./two-way-data-binding01.component.css']
})
export class TwoWayDataBinding01Component implements OnInit {
  
  userName = '';

  constructor() { }

  ngOnInit() {
  }

  onUserNameUpdate(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }


}
