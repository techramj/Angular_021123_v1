import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03_demo3';

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
