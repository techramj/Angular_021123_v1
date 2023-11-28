import { Component } from '@angular/core';

@Component({
  selector: 'app-button-count-page',
  templateUrl: './button-count-page.component.html',
  styleUrls: ['./button-count-page.component.css']
})
export class ButtonCountPageComponent {
  buttonCount:number = 0;
  msg:string ="";
  displayMessage:boolean = false;

  addCount(){
      this.buttonCount = ++this.buttonCount;
  }
}
