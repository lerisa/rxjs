import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorsComponent } from './operators/operators.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { JoinCreationOperatorsComponent } from './join-creation-operators/join-creation-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { ConditionalOperatorsComponent } from './conditional-operators/conditional-operators.component';
import { MathematicalOperatorsComponent } from './mathematical-operators/mathematical-operators.component';
import { UtilityOperatorsComponent } from './utility-operators/utility-operators.component';
import { ErrorHandlingOperatorsComponent } from './error-handling-operators/error-handling-operators.component';
import { MulticastingOperatorsComponent } from './multicasting-operators/multicasting-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { JoinOperatorsComponent } from './join-operators/join-operators.component';

@NgModule({
  declarations: [AppComponent, OperatorsComponent, CreationOperatorsComponent, JoinCreationOperatorsComponent, TransformationOperatorsComponent, ConditionalOperatorsComponent, MathematicalOperatorsComponent, UtilityOperatorsComponent, ErrorHandlingOperatorsComponent, MulticastingOperatorsComponent, FilteringOperatorsComponent, JoinOperatorsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
