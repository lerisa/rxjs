import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformation-operators',
  templateUrl: './transformation-operators.component.html',
})
export class TransformationOperatorsComponent implements OnInit {
  transformationOperators: any;
  constructor() {}

  ngOnInit(): void {
    this.transformationOperators = [
      'buffer',
      'bufferCount',
      'bufferTime',
      'bufferToggle',
      'bufferWhen',
      'concatMap',
      'concatMapTo',
      'exhaust',
      'exhaustMap',
      'expand',
      'groupBy',
      'map',
      'mapTo',
      'mergeMap',
      'mergeMapTo',
      'mergeScan',
      'pairwise',
      'partition',
      'pluck',
      'scan',
      'switchScan',
      'switchMap',
      'switchMapTo',
      'window',
      'windowCount',
      'windowTime',
      'windowToggle',
      'windowWhen',
    ];
  }
}
