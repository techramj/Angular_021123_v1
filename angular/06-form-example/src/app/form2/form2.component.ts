import { FormsModule, NgForm } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {


  onSubmit(form: NgForm){
    console.log(form);
    let name = form.value.username;
    let email = form.value.email;
    console.log(`Name =${name} & Email = ${email}`);
  }
}
