import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm  } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {

  @ViewChild('loginForm') form:NgForm;

  @ViewChild('user') user:any;

  onSubmit(){
    console.log(this.form);
    console.log(this.user);
    let name = this.form.value.username;
    let email = this.form.value.email;
    console.log(`Name =${name} & Email = ${email}`);
  }
}
