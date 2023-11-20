import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
 
  @Input("name") firstName:string = '';
  @Input() age:string = '';
  @Input() hairColor:string = '';
}
