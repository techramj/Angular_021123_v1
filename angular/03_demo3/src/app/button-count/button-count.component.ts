import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-count',
  templateUrl: './button-count.component.html',
  styleUrls: ['./button-count.component.css']
})
export class ButtonCountComponent {
  @Input() count:number = 0;
  @Output() countEvent = new EventEmitter();

  onButtonClick(){
    this.countEvent.emit();
  }
}
