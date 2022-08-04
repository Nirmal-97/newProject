import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'Server', name: 'Test Server', content: 'Just a Test!' },
  ];

  onAddServer(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'Server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onAddBlueprint(blueprintData: {serverName: string;serverContent: string;}) {
    this.serverElements.push({
      type: 'Blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
