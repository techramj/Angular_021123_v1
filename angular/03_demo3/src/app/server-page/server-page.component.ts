import { Component } from '@angular/core';

@Component({
  selector: 'app-server-page',
  templateUrl: './server-page.component.html',
  styleUrls: ['./server-page.component.css']
})
export class ServerPageComponent {

  servers = [
    {name:'Currecy Exchannge Rate Server',status: "active", statusCanBeUpdated:true },
    {name:'NSE',status: "active", statusCanBeUpdated:false },
    {name:'BSE',status: "active", statusCanBeUpdated:true },
    {name:'Logging Server',status: "inactive", statusCanBeUpdated:false },
  ];


  addServer(server:any){
    console.log("add server",server);
    this.servers.push({name:server.name, status:server.status, statusCanBeUpdated:false});
  }

}
