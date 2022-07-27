import { Component,OnInit } from "@angular/core";    

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  allowNewServer = false;
  serverWasCreated = 'No server was created';

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
    this.serverWasCreated = 'Server Created';
  }
}
