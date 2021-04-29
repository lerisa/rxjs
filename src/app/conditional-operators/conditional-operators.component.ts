import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-operators',
  templateUrl: './conditional-operators.component.html',
})
export class ConditionalOperatorsComponent implements OnInit {
  conditionalOperators: any;

  constructor() {}

  ngOnInit(): void {
    this.conditionalOperators = [
      'defaultIfEmpty',
      'every',
      'find',
      'findIndex',
      'isEmpty',
    ];
  }
}
