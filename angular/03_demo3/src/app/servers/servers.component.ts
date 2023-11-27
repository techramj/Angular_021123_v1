import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverName:string="";
  status =  '';
  @Output() addServerEvent = new EventEmitter();

  @Input() servers:{name:string, status:string, statusCanBeUpdated:boolean}[] = [];


  onButtonClicked(){
    console.log("onButtonClicked clicked");
    this.addServerEvent.emit({name:this.serverName, status:this.status});
    this.resetProperty();
  }


  resetProperty(){
    this.serverName = '';
    this.status = '';
  }

}
