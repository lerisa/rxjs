import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-operators',
  templateUrl: './join-operators.component.html',
})
export class JoinOperatorsComponent implements OnInit {
  joinOperators: any;
  constructor() {}

  ngOnInit(): void {
    this.joinOperators = [
      'combineLatestAll',
      'concatAll',
      'exhaustAll',
      'mergeAll',
      'switchAll',
      'startWith',
      'withLatestFrom',
    ];
  }
}
