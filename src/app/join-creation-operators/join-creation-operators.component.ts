import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-creation-operators',
  templateUrl: './join-creation-operators.component.html',
})
export class JoinCreationOperatorsComponent implements OnInit {
  joinCreationOperators: any;
  constructor() {}

  ngOnInit(): void {
    this.joinCreationOperators = [
      'combineLatest',
      'concat',
      'forkJoin',
      'merge',
      'partition',
      'race',
      'zip',
    ];
  }
}
