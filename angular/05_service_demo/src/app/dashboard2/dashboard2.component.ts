import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component {
  logs:any[] = [];

  constructor(private loggingService:LoggingService){}

  ngOnInit():void{
    this.logs = this.loggingService.getLogs();
  }
}
