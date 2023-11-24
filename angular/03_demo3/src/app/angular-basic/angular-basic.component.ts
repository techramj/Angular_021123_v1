import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrls: ['./angular-basic.component.css']
})
export class AngularBasicComponent {

  title = ' Angular Basic Feature';
  colors = ['RED', 'GREEN', 'BLUE', 'ORANGE', 'MAGENTA','ABC'];
  day  = 5;
  min_day = 1;
  max_day = 8;


  show = true;  //to way binding
  hide = true;

  emp = {
    id:100,
    name: 'ram Jaiswal',
    salary: 911999.456754,
    variable: 0.15,
    gender: 1,
    doj: new Date(),
    mobile: '9898987659',
    pan:'aomma8815j',
    isMarried: true,
    city: 'Pune'
  };

  showHide(){
    this.hide = !this.hide;
  }


}
