import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-message',
  templateUrl: './button-message.component.html',
  styleUrls: ['./button-message.component.css']
})
export class ButtonMessageComponent {
  @Input() countInMessage:number = 0;
  batch:string ="silver";
  displayMessage:boolean = false;
  msg1 = "Congratulation!, You received silver batch";
  msg2 = "Congratulation!, You received golden batch";
  msg3 = "Congratulation!, You received platinum batch";







}
