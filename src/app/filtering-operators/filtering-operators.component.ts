import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering-operators',
  templateUrl: './filtering-operators.component.html',
})
export class FilteringOperatorsComponent implements OnInit {
  filteringOperators: any;
  constructor() {}

  ngOnInit(): void {
    this.filteringOperators = [
      'audit',
      'auditTime',
      'debounce',
      'debounceTime',
      'distinct',
      'distinctUntilChanged',
      'distinctUntilKeyChanged',
      'elementAt',
      'filter',
      'first',
      'ignoreElements',
      'last',
      'sample',
      'sampleTime',
      'single',
      'skip',
      'skipLast',
      'skipUntil',
      'skipWhile',
      'take',
      'takeLast',
      'takeUntil',
      'takeWhile',
      'throttle',
      'throttleTime',
    ];
  }
}
