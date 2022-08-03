import { Component,ElementRef,OnInit, ViewChild } from "@angular/core";    

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})

export class ServerComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
    // server = '';
    // serverId: number = 10;
    // serverStatus: string = 'offline';
    // allowNewServer = false;
    // serverWasCreated = 'No server was created';
    // serverDynamic = '';
    // user = '';
    // username = '';
    // serverCreated = false;
    // testServer = ['test 1', 'test 2'];

    
    // getStatus() {
    //   return this.serverStatus;
    // }
    
    // constructor() {
    //   // setTimeout(() => {
    //     //   this.allowNewServer = true;
    //     // }, 2000);
    //     this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    //   }
      
    //   getColor() {
    //     return this.serverStatus === 'online' ? 'purple' : 'red';
    //   }
      
    //   ngOnInit(): void {}
      
    //   onCreateServer() {
    //     this.serverCreated = true;
    //     this.serverWasCreated = 'Server Was Created Name is' + ' ' + this.serverDynamic;
    //     this.testServer.push(this.server);
    //   }
  
      
    //   onUpdateServerName(event: Event) {
    //     this.serverDynamic = (<HTMLInputElement>event.target).value;
    //   }
      
    // @ViewChild('username') userName!: ElementRef;
    
    // onDeleteServer() {
    //   this.userName.nativeElement.value = '';
    // }
}
