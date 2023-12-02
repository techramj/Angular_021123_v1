import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-message',
  templateUrl: './button-message.component.html',
  styleUrls: ['./button-message.component.css']
})
export class ButtonMessageComponent {
  @Input() countInMessage:number = 0;
  batch:string ="silvButtonMessageComponenter";
  displayMessage:boolean = false;
  msg: string = ''

  ngOnChanges() : void{
   console.log('ButtonMessageComponent ngOnChanges called!!!')

    this.displayMessage = true;
    if(this.countInMessage == 5){
      this.msg = "Congratulation!, You received silver batch";
    }else   if(this.countInMessage == 10){
      this.msg = "Congratulation!, You received golden batch";
    }else if(this.countInMessage == 20){
      this.msg = "Congratulation!, You received platinum batch";
    }else{
      this.displayMessage = false;
    }
  }


}
