import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  person1 = {name:'Jack', age:23, hairColor:'abc'};
  person2 = {name:'jessica', age:23, hairColor:'white'};
  person3 = {name:'Jackson', age:29, hairColor:'black'};
}
