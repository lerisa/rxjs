import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-operators',
  templateUrl: './utility-operators.component.html',
})
export class UtilityOperatorsComponent implements OnInit {
  utilityOperators: any;
  constructor() {}

  ngOnInit(): void {
    this.utilityOperators = [
      'tap',
      'delay',
      'delayWhen',
      'dematerialize',
      'materialize',
      'observeOn',
      'subscribeOn',
      'timeInterval',
      'timestamp',
      'timeout',
      'timeoutWith',
      'toArray',
    ];
  }
}
