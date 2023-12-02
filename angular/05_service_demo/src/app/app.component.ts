import { Component } from '@angular/core';
import { LoggingService } from './shared/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent {
  title = '05_service_demo';

  logs:any[] = [];

  addLogs(log:any){
    console.log('AppComponent: '+log);
    this.logs.push(log);
  }
}
