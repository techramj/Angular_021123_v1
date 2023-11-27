import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    @Input("id") serverId = 0;
    @Input("name") servername:string = "";
    @Input() status:string = "Inactive";
    @Input() isButtonDisabled = true;


    changeStatus(){
      this.status = this.status == 'active' ?'inactive' :'active';
    }
}
