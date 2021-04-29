import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multicasting-operators',
  templateUrl: './multicasting-operators.component.html',
})
export class MulticastingOperatorsComponent implements OnInit {
  multicastingOperators: any;
  constructor() {}

  ngOnInit(): void {
    this.multicastingOperators = [
      'multicast',
      'publish',
      'publishBehavior',
      'publishLast',
      'publishReplay',
      'share',
    ];
  }
}
