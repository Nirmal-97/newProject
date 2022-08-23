import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-service',
  templateUrl: './directives-service.component.html',
  styleUrls: ['./directives-service.component.css'],
})
export class DirectivesServiceComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  constructor() {}

  ngOnInit(): void {}
}
