import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrls: ['./person1.component.css']
})
export class Person1Component {

  validHairColor:string[] = ['black', 'white', 'brown'];
     @Input() person:{name:string, age:number, hairColor:string} = {name:'', age:0, hairColor:''};



  }
