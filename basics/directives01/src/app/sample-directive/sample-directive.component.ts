import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-directive',
  templateUrl: './sample-directive.component.html',
  styleUrls: ['./sample-directive.component.css']
})
export class SampleDirectiveComponent implements OnInit {

  paragraphText = '';
  textList = [];
  displayCheck = false;
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
    this.displayCheck = !this.displayCheck;
    this.paragraphText = Date();
    this.textList.push(this.paragraphText);
  }


}
