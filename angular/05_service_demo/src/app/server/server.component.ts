import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  name:string = '';
  status:string = 'offline';
  @Input() server:any = {name:'', status:''};
}
