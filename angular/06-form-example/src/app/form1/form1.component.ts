import { Component } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {


  onSubmit(form:any){
    console.log(form);
  }
}
