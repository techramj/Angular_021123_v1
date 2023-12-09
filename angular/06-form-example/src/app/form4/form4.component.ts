import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm  } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component {

  @ViewChild('loginForm') form:NgForm;
  defaultQuestion:string = 'school';
  answer:string = '';
  gender:string[] =['female', 'male'];

  questioniare:{question:string, desc:string}[] = [
    {question:'movie', desc:'Favourite Movie'},
    {question:'teacher', desc:'Favourite Teacher'},
    {question:'game', desc:'Favourite Game'},
    {question:'school', desc:'First school'}
  ];


  onSubmit(){

    let name = this.form.value.username;
    let email = this.form.value.email;
    let question = this.form.value.question;
    let answer = this.form.value.answer;
    console.log(`Name =${name} & Email = ${email}  & question =${question}`);
    console.log('default question: ',this.defaultQuestion);
    console.log('Ans: '+answer, this.answer);
  }

}
