import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-handling-operators',
  templateUrl: './error-handling-operators.component.html',
})
export class ErrorHandlingOperatorsComponent implements OnInit {
  errorHandlingOperators: any;

  constructor() {}

  ngOnInit(): void {
    this.errorHandlingOperators = ['catchError', 'retry', 'retryWhen'];
  }
}
