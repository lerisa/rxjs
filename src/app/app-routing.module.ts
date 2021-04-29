import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalOperatorsComponent } from './conditional-operators/conditional-operators.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { ErrorHandlingOperatorsComponent } from './error-handling-operators/error-handling-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { JoinCreationOperatorsComponent } from './join-creation-operators/join-creation-operators.component';
import { JoinOperatorsComponent } from './join-operators/join-operators.component';
import { MathematicalOperatorsComponent } from './mathematical-operators/mathematical-operators.component';
import { MulticastingOperatorsComponent } from './multicasting-operators/multicasting-operators.component';
import { OperatorsComponent } from './operators/operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { UtilityOperatorsComponent } from './utility-operators/utility-operators.component';

const routes: Routes = [
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [
      {
        path: 'creation',
        component: CreationOperatorsComponent,
      },
      {
        path: 'join-creation',
        component: JoinCreationOperatorsComponent,
      },
      {
        path: 'transformation',
        component: TransformationOperatorsComponent,
      },
      {
        path: 'multicasting',
        component: MulticastingOperatorsComponent,
      },
      {
        path: 'error-handling',
        component: ErrorHandlingOperatorsComponent,
      },
      {
        path: 'utility',
        component: UtilityOperatorsComponent,
      },
      {
        path: 'conditional-and-boolean',
        component: ConditionalOperatorsComponent,
      },
      {
        path: 'mathematical-and-aggregate',
        component: MathematicalOperatorsComponent,
      },
      {
        path: 'filtering',
        component: FilteringOperatorsComponent,
      },
      {
        path: 'join',
        component: JoinOperatorsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
