import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {

  constructor(private logService:LoggingService){}

  addAccount(){
    this.logService.log({msg:"Account Added", time:new Date()});
  }


}
