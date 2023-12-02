import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css'],
  providers: []
})
export class Dashboard1Component implements OnInit {

  logs:any[] = [];

  constructor(private loggingService:LoggingService){}

  ngOnInit():void{
    this.logs = this.loggingService.getLogs();
  }


}
