import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-people1',
  templateUrl: './people1.component.html',
  styleUrls: ['./people1.component.css']
})
export class People1Component {

  defaultName:string ='Elizabeth';
  defaultHairColor:string ='Black';

  persons = [{name:'Jack', age:23, hairColor:'abc'},
  {name:'jessica', age:23, hairColor:'white'},
  {name:'Jackson', age:29, hairColor:'black'}
  ];


  addPerson(){
      let name = 'Elizabeth '+ (this.persons.length+1);
      let age = 18 + Math.round(Math.random()*50);
      let hairColor = 'Black';

      //this.persons.push({'name':name, 'age':age, hairColor:hairColor});
      this.persons.push({name,age,hairColor});
      console.log(this.defaultName, this.defaultHairColor);
  }
}
