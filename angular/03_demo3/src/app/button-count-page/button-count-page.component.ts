import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-count-page',
  templateUrl: './button-count-page.component.html',
  styleUrls: ['./button-count-page.component.css']
})
export class ButtonCountPageComponent {
  buttonCount:number = 0;
  msg:string ="";


  addCount(){
    this.buttonCount = ++this.buttonCount;
    if(this.buttonCount == 5){
      this.msg = "Congratulation!, You received Silver batch";
      console.log(this.buttonCount, this.msg);
    }else if(this.buttonCount == 10){
      this.msg = "Congratulation!, You received Golden batch";
      console.log(this.buttonCount, this.msg);
    }else if(this.buttonCount==20){
      this.msg = "Congratulation!, You received Platinum batch";
      console.log(this.buttonCount, this.msg);
    }else{
      this.msg = '';
    }

  }


}
