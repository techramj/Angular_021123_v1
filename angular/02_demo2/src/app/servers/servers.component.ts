import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverName:string="";
  status =  '';

  servers = [
    {name:'Currecy Exchannge Rate Server',status: "active", statusCanBeUpdated:true },
    {name:'NSE',status: "active", statusCanBeUpdated:false },
    {name:'BSE',status: "active", statusCanBeUpdated:true },
    {name:'Logging Server',status: "inactive", statusCanBeUpdated:false },
  ];


  addServer(){

    this.servers.push({name:this.serverName, status:this.status, statusCanBeUpdated:true});
    this.resetProperty();
  }

  resetProperty(){
    this.serverName = '';
    this.status = '';
  }

}
