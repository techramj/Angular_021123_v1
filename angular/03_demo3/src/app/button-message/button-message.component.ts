import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-message',
  templateUrl: './button-message.component.html',
  styleUrls: ['./button-message.component.css']
})
export class ButtonMessageComponent {
  @Input() countInMessage:number = 0;
  @Input() message:string ="";








}
