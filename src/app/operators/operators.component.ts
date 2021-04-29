import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
})
export class OperatorsComponent implements OnInit {
  categoriesOfOperators: any;
  constructor() {}

  ngOnInit(): void {
    this.categoriesOfOperators = [
      { name: ' Join Creation Operators', id: 2, link: '/join-creation' },
      { name: ' Creation Operators', id: 1, link: '/creation' },
      {
        name: ' Transformation Operators',
        id: 3,
        link: '/transformation',
      },
      { name: ' Filtering Operators', id: 4, link: '/filtering' },
      { name: ' Join Operators', id: 5, link: '/join' },
      { name: ' Multicasting Operators', id: 6, link: '/multicasting' },
      { name: ' Error Handling Operators', id: 7, link: '/error-handling' },
      { name: ' Utility Operators', id: 8, link: '/utility' },
      {
        name: ' Conditional and boolean Operators ',
        id: 8,
        link: '/conditional-and-boolean',
      },
      {
        name: ' Mathematical and Aggregate Operators ',
        id: 9,
        link: '/mathematical-and-aggregate',
      },
    ];
  }
}
