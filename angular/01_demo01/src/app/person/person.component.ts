import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  validHairColor:string[] = ['black', 'white', 'brown'];

  @Input("name") firstName:string = '';
  @Input() age:number = 0;
  @Input() hairColor:string = ''






}
