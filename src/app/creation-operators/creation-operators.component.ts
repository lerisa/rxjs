import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
})
export class CreationOperatorsComponent implements OnInit {
  creationOperators: any;

  constructor() {}

  ngOnInit(): void {
    this.creationOperators = [
      'ajax',
      'bindCallback',
      'bindNodeCallback',
      'defer',
      'empty',
      'from',
      'fromEvent',
      'fromEventPattern',
      'generate',
      'interval',
      'of',
      'range',
      'throwError',
      'timer',
      'iif',
    ];
  }
}
