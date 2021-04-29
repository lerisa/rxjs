import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathematical-operators',
  templateUrl: './mathematical-operators.component.html',
})
export class MathematicalOperatorsComponent implements OnInit {
  mathematicalOperators: any;
  constructor() {}

  ngOnInit(): void {
    this.mathematicalOperators = ['count', 'max', 'min', 'reduce'];
  }
}
