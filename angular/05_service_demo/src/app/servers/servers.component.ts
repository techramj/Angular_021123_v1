import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: []
})
export class ServersComponent {

  servers = [
    {name:'server1', status:'offline'},
    {name:'server2', status:'offline'},
    {name:'server3', status:'online'}
  ];

  constructor(private logService:LoggingService){}

  addServer(){
     this.logService.log({msg:'Server Added',time: new Date()});
  }

}
