import { Component,OnInit } from "@angular/core";    

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverWasCreated = 'No server was created';
  serverDynamic = '';
  username = '';
  serverCreated = false;

  getStatus() {
    return this.serverStatus;
  }

  //   constructor() {
  //     setTimeout(() => {
  //       this.allowNewServer = true;
  //     }, 2000);
  //   }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverWasCreated = 'Server Created Name is' + ' ' + this.serverDynamic;
  }

  onUpdateServerName(event: Event) {
    this.serverDynamic = (<HTMLInputElement>event.target).value;
  }
}
