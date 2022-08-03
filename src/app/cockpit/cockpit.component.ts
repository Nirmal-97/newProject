import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  name: string = ' ';

  @ViewChild('name') userName!: ElementRef;

  onDeleteServer() {
    this.userName.nativeElement.value = '';
  }
}
